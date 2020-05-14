import { HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, timeout } from 'rxjs/operators';

import { HttpServiceHandler, HttpServiceInterceptor, HttpServiceMetadata } from '../http-service';
import { ErrorNotifierService } from './http-auth-error';
import { AppSettings } from '@app/app.constants';
import { EnvProvider } from '@env/env.provider';

@Injectable()
export class HttpAuthInterceptor implements HttpServiceInterceptor {

  readonly urlLogout = '/logout';

  constructor(
    private errorService: ErrorNotifierService,
    private envProvider: EnvProvider
  ) { }

  private setContentAcceptHeader(req: HttpRequest<any>): HttpRequest<any> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }
    return req;
  }

  private addAPIBasePath(req: HttpRequest<any>, metadata: Partial<HttpServiceMetadata>): HttpRequest<any> {
    let newReq: HttpRequest<any>;
    if (metadata && metadata.responseType) {
      newReq = req.clone({
        responseType: metadata.responseType
      });
    }
    else {
      let apiUrl = req.url;
      if (!req.urlWithParams.startsWith('https')) {
       apiUrl = this.envProvider.getApiUrl();
        newReq = req.clone({
          url: apiUrl + req.url
        });
      }
      else {
        newReq = req;
      }
    }
    return newReq;
  }

  intercept(req: HttpRequest<any>, metadata: Partial<HttpServiceMetadata>, next: HttpServiceHandler): Observable<HttpEvent<any>> {
    let newReq: HttpRequest<any>;
    newReq = this.setContentAcceptHeader(req);
    newReq = this.addAPIBasePath(newReq, metadata);

    return next.handle(newReq, metadata).pipe(
      timeout(AppSettings.httpConfig.timeout),
      catchError((err: HttpErrorResponse) => {
        if (err.error instanceof ErrorEvent) {
          this.errorService.notifyError(err);
          return this.handleError(err);
        }
        else {
          switch (err.status) {
            default:
              this.errorService.notifyError(err);
              return this.handleError(err);
          }
        }
      })
    );
  }

  private handleError(error: HttpErrorResponse | any) {
    let errMsg: string;
    if (error instanceof HttpErrorResponse) {
      return Observable.throw(error);
    }
    else {
      errMsg = error.message ? error.message : error.toString();
      return Observable.throw(errMsg);
    }
  }

}
