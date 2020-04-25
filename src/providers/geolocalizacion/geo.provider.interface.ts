import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Localizacion } from '@providers/geolocalizacion/geolocalizacion.model';

@Injectable()
export abstract class IGeoProvider {
  abstract getUserLocation(): Observable<Localizacion>;
  abstract getGeographicDistance(localizacion: Localizacion,  localizacion2: Localizacion): number;
  abstract calculateRoute(localizacion: Localizacion, localizacion2: Localizacion): number;
}
