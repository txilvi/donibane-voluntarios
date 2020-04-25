

import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { HttpServiceHandler, HttpServiceInterceptor, HttpServiceMetadata } from '../http-service';
import { HttpCacheService } from './http-cache-service';


@Injectable()
export class HttpCacheInterceptor implements HttpServiceInterceptor {

  constructor(private cacheService: HttpCacheService) {}

  intercept(req: HttpRequest<any>, metadata: Partial<HttpServiceMetadata>, next: HttpServiceHandler): Observable<HttpEvent<any>> {
    //Continuar si no hay que aplicar filtro de cache
    if (!metadata.cache) {
      return next.handle(req, metadata);
    }
    else {
      const cachedResponse = this.cacheService.getCacheData(req.url, req.params);
      return cachedResponse ? Observable.of(cachedResponse) : this.sendRequest(req, metadata, next);
    }
  }

   sendRequest(
    req: HttpRequest<any>,
    metadata: Partial<HttpServiceMetadata>,
    next: HttpServiceHandler): Observable<HttpEvent<any>> {

    return next.handle(req, metadata).pipe(
      tap(event => {
        // There may be other events besides the response.
        if (event instanceof HttpResponse) {
          this.cacheService.setCacheData(req.url, req.params, event); // Update the cache.
        }
      })
    );
  }


}
