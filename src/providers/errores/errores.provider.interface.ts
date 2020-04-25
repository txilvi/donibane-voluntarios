import { Injectable } from '@angular/core';
import { ErrorCustom } from '@providers/errores/errores.model';


@Injectable()
export abstract class IErroresProvider {
  abstract addError(error: ErrorCustom);
}
