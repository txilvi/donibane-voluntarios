import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { IExcursionesProvider } from '@providers/excursiones/excursiones.provider.interface';
import { Excursion } from '@providers/excursiones/excursiones.model';


@Injectable()
export class ExcursionesProvider extends IExcursionesProvider {

  private dbPath: string = '/excursiones';

  constructor(private db: AngularFireDatabase) {
    super();
  }

  getExcursiones(): Observable<Excursion[]>
  {
    let actividades = this.db.list(this.dbPath);
    return actividades.valueChanges();
  }

}
