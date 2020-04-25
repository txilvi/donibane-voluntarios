import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Localizacion, Marcador } from '@providers/geolocalizacion/geolocalizacion.model';

@Injectable()
export abstract class IMapaProvider {

  getDrag$: Observable<Localizacion>;
  abstract loadMap(elementoDom: HTMLElement, localizacionCentro?: Localizacion): Observable<any>;
  abstract addMarkers(map: any, marcadores: Marcador[], draggables: boolean): Observable<any>;
  abstract setZoom(map: any, zoom: number);
  abstract setCenter(map: any, localizacion?: Localizacion);
  abstract setLongPressMap(map): Observable<Localizacion>;
  abstract clearMarkers();
}
