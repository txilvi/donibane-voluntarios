import { Injectable } from '@angular/core';
import { IErroresProvider } from '@providers/errores/errores.provider.interface';
import { ErrorCustom } from '@providers/errores/errores.model';


@Injectable()
export class ErroresProviderFake extends IErroresProvider {
  readonly urlErrores = '/errores';

  constructor(
  ) {
    super();
  }

  addError(error: ErrorCustom) {
    error = error;
  }
}
