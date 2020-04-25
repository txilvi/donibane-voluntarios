import { Injectable, Injector,  ErrorHandler } from '@angular/core';

import { LoggingProvider } from '../logging/logging.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  private errorLogging: Error = new Error('Error desconocido');

  constructor(private injector: Injector) {
    super();
  }

  handleError(error: any) {
    super.handleError(error);
    if (typeof error == 'object') {
      this.errorLogging = error;
    }
    else if (typeof error == 'string') {
      this.errorLogging = new Error(error);
    }
    const loggingService = this.injector.get(LoggingProvider);
    loggingService.logJsError(this.errorLogging);
  }

}
