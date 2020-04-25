import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Localizacion, SugerenciaDireccion, Direccion } from '@providers/geolocalizacion/geolocalizacion.model';

@Injectable()
export abstract class IAddressSuggestionsProvider {
  abstract getAddressSugestions(filtro: string): Observable<SugerenciaDireccion[]>;
  abstract getLatLngByPlace(placeId: string): Observable<Localizacion>;
  abstract getPlaceByLatLng(loc: Localizacion): Observable<Direccion>;
}
