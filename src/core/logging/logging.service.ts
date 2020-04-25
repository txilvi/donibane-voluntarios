import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as StackTrace from 'stacktrace-js';

import { AppSettings } from '@app/app.constants';
import { EnvSettings } from '@environment';
import { IErroresProvider } from '@providers/errores/errores.provider.interface';
import { ErrorCustom } from '@providers/errores/errores.model';

declare const window: any;

@Injectable()
export class LoggingProvider {

  readonly urlLogError: string = 'api/erroresFrontend';
  private timestampLastLog: number = 0;

  constructor(private injector: Injector) {}

  logJsError(error: Error) {
    if (EnvSettings.logLevel == 1 || EnvSettings.logLevel == 3) {
      const errorProvider = this.injector.get(IErroresProvider);
     
      if (this.timestampLastLog && (Date.now() - this.timestampLastLog) < AppSettings.errorInterval) {
        return;
      }
      this.timestampLastLog = Date.now();
      try {
        const deviceService = this.injector.get(DeviceDetectorService);
        let stactraceOpts = { offline: true };
        StackTrace.fromError(error, stactraceOpts)
          .then(stackframes => {
            let stackTrace = stackframes
              .splice(0, 20)
              .map(function (sf) {
                return sf.toString();
              }).join('\n').replace('"', '\'');
            let deviceInfo = deviceService.getDeviceInfo();
            let errorData = {
              stackTrace: JSON.stringify(stackTrace),
              errorMessage: error.toString(),
              errorDevice: JSON.stringify(deviceInfo),
              cause: error.message ? error.message : error.toString(),
              errorUrl: window.location.href,
            };
            errorProvider.addError(errorData);
          })
          .catch(err => console.error('error en fromError: ' + err));
      }
      catch (logJsEx) {
        console.error('Error al guardar un error Javascript');
        console.error(logJsEx);
      }
    }
  }

  logHttpError(error: HttpErrorResponse) {
    if (EnvSettings.logLevel == 2 || EnvSettings.logLevel == 3) {
      const errorProvider = this.injector.get(IErroresProvider);
      
      try {
        const deviceService = this.injector.get(DeviceDetectorService);
        let deviceInfo = deviceService.getDeviceInfo();
        let errorData: ErrorCustom = {
          stackTrace: JSON.stringify(error),
          errorMessage: error.toString(),
          errorDevice: JSON.stringify(deviceInfo),
          cause: error.status ? error.status.toString() : 'Unknow httpError',
          errorUrl: '',
        };
        errorProvider.addError(errorData);
      }
      catch (logHttpEx) {
        console.error('Error al guardar un error Http');
        console.error(logHttpEx);
      }
    }
  }


}
