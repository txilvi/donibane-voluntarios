import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CacheService } from 'ionic-cache';

import { Actividad, ActividadRealizada } from '@providers/actividades/actividades.model';
import { IActividadesProvider } from '@providers/actividades/actividades.provider.interface';



@Injectable()
export class ActividadesProviderFake extends IActividadesProvider {
 
  readonly urlActividades = '/actividades';
  readonly urlActividadesRealizadas = '/actividadesRealizadas';

  constructor(
    private http: HttpClient,
    private cacheStorage: CacheService
  ) {
    super();
  }

  getActividades(): Observable <Actividad[]> {
    let request = this.http.config({ cache: true })
      .get <Actividad[]>(this.urlActividades);
    return this.cacheStorage.loadFromDelayedObservable(this.urlActividades, request, undefined, undefined, 'all');
  }

  getActividadesRealizadas(): Observable<ActividadRealizada[]> {
    let url = this.urlActividadesRealizadas;
    return this.http.config({ cache: false }).get<ActividadRealizada[]>(url);
  }

  addPuntosActividadRealizada(actividadRealizada: ActividadRealizada){
    return Observable.of(actividadRealizada);
  }

  setPercentageActividad(actividad: Actividad, puntosTotales: number, percentage: number){
    puntosTotales = puntosTotales;
    actividad = actividad;
    percentage = percentage;
  }
}
