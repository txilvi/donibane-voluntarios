import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { IErroresProvider } from '@providers/errores/errores.provider.interface';
import { ErrorCustom } from '@providers/errores/errores.model';


@Injectable()
export class ErroresProvider extends IErroresProvider {
  
  private dbPathErrores: string = '/errores';

  constructor(private db: AngularFireDatabase) {
    super();
  }

  addError(error: ErrorCustom) {
    let errores = this.db.list(this.dbPathErrores);
    errores.push(error);
  }

}
