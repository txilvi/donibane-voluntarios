import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppErrorHandler } from './errorHandler/errorHandler';
import { GlobalService } from './global/global.service';
import { HttpAuthInterceptor } from './http/http-auth/http-auth';
import { ErrorNotifierService } from './http/http-auth/http-auth-error';
import { HttpCacheInterceptor } from './http/http-cache/http-cache-interceptor';
import { HttpCacheService } from './http/http-cache/http-cache-service';
import { HttpSchemaInterceptor } from './http/http-schema/http-schema-interceptor';
import { HttpSchemaService } from './http/http-schema/http-schema-service';
import { HTTP_DYNAMIC_INTERCEPTORS, HttpService, HttpServiceInterceptor } from './http/http-service';
import { I18nService } from './i18n/i18n.service';
import { MyMissingTranslationHandler } from './i18n/i18n.missing.handler';
import { LoggingProvider } from './logging/logging.service';
import { EnvProvider } from '@env/env.provider';


export function createHttpService(httpHandler: HttpHandler, interceptors: HttpServiceInterceptor[] | null) {
  return new HttpService(httpHandler, interceptors);
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TranslateModule.forRoot({
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
      useDefaultLang: false
    }),
    DeviceDetectorModule.forRoot()
  ],
  providers: [
      I18nService,
      HttpCacheService,
      HttpSchemaService,
      GlobalService,
      LoggingProvider,
      {
        provide: ErrorHandler,
        useClass: AppErrorHandler
      },
      {
        provide: HttpClient,
        deps: [HttpHandler, HTTP_DYNAMIC_INTERCEPTORS],
        useFactory: createHttpService
      },
      { provide: HTTP_DYNAMIC_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
      { provide: HTTP_DYNAMIC_INTERCEPTORS, useClass: HttpCacheInterceptor, multi: true },
      { provide: HTTP_DYNAMIC_INTERCEPTORS, useClass: HttpSchemaInterceptor, multi: true },
      ErrorNotifierService,
      EnvProvider
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} ha sido ya cargado. Importa el módulo Coreo unicamente en AppModule.`);
    }
  }
}
