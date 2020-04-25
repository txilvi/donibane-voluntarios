import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggingProvider } from '@core/logging/logging.service';
import { Observable } from 'rxjs/Observable';
import { flatMap } from 'rxjs/operators';

import { HttpServiceHandler, HttpServiceInterceptor, HttpServiceMetadata } from '../http-service';
import { HttpSchemaService } from './http-schema-service';


@Injectable()
export class HttpSchemaInterceptor implements HttpServiceInterceptor {

  constructor(private schemaService: HttpSchemaService, private loggingService: LoggingProvider) {}

  intercept(req: HttpRequest<any>, metadata: Partial<HttpServiceMetadata>, next: HttpServiceHandler): Observable<HttpEvent<any>> {
    //Continuar si no hay que aplicar filtro de schema
    if (metadata.jsonSchema == null)
      return next.handle(req, metadata);

    return next.handle(req, metadata)
      .pipe(
        flatMap((event: HttpEvent<any>, _index: number): Observable<any> => {
          if (event instanceof HttpResponse) {
            let validationErrors = this.schemaService.validate(metadata.jsonSchema, event.body);
            if (validationErrors.length > 0) {
              let errorMsg = 'Schema no válido: ' + validationErrors;
              this.loggingService.logJsError(new Error(errorMsg));
              return Observable.throw(errorMsg);
            }
          }
          return Observable.of(event);
        }));
  }

}
