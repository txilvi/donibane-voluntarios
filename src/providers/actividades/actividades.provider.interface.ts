import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Actividad, ActividadRealizada } from '@providers/actividades/actividades.model';


@Injectable()
export abstract class IActividadesProvider {
  abstract getActividades(): Observable<Actividad[]>;
  abstract getActividadesRealizadas(): Observable<ActividadRealizada[]>;
  abstract addPuntosActividadRealizada(actividadRealizada: ActividadRealizada);
  abstract setPercentageActividad(actividad: Actividad, puntosTotales: number, percentage: number);
}
