import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IActividadesProvider } from '@providers/actividades/actividades.provider.interface';
import { Actividad, ActividadRealizada } from '@providers/actividades/actividades.model';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ActividadesProvider extends IActividadesProvider {
  
  private dbPathActividades: string = '/actividades';
  private dbPathActividadesRealizadas: string = '/actividadesRealizadas';

  constructor(private db: AngularFireDatabase) {
    super();
  }

  getActividades(): Observable<Actividad[]>
  {
    let actividades = this.db.list(this.dbPathActividades);
    return actividades.valueChanges();
  }

  getActividadesRealizadas(): Observable<ActividadRealizada[]> {
    let actividad = this.db.list(this.dbPathActividadesRealizadas);
    return actividad.valueChanges();
  }

  addPuntosActividadRealizada(actividadRealizada: ActividadRealizada) {
    let actividadesRealizadas = this.db.list(this.dbPathActividadesRealizadas);
    actividadesRealizadas.push(actividadRealizada);
  }

  setPercentageActividad(actividad: Actividad, puntosTotales: number, percentage: number) {
    let actividadFromDB = this.db.object<Actividad>(`${this.dbPathActividades}/${actividad.id}`);
    actividadFromDB.update({ puntosTotales: puntosTotales, porcentaje: percentage});
  }
}

