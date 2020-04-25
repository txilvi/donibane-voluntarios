import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LoggingProvider } from '../../logging/logging.service';

@Injectable()
export class ErrorNotifierService {
  private errorSubject: Subject<Error> = new Subject();

  constructor(private injector: Injector) { }

  notifyError(error: HttpErrorResponse) {
    const loggingService = this.injector.get(LoggingProvider);
    loggingService.logHttpError(error);
    this.errorSubject.next(error);
  }

  onError(callback: (err: any) => void) {
    this.errorSubject.subscribe(callback);
  }

}
