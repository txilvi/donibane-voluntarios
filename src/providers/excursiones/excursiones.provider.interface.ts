import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Excursion } from '@providers/excursiones/excursiones.model';

@Injectable()
export abstract class IExcursionesProvider {

  abstract getExcursiones(): Observable<Excursion[]>;
}
