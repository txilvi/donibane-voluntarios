import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Localizacion, SugerenciaDireccion, Direccion } from '@providers/geolocalizacion/geolocalizacion.model';
import { IAddressSuggestionsProvider } from '@providers/geolocalizacion/address-suggestions.interface';


@Injectable()
export class AddressSuggestionsProviderFake extends IAddressSuggestionsProvider {

  sugerencias = [{
    id: '1',
    nombreCompleto: 'Hipermercado Eroski, Berriozar',
    lugarPrincipal: 'Hipermercado Eroski',
    lugarSecundario: 'Berriozar',
    localizacion: new Localizacion(42.834102, -1.680226)
  },
  {
    id: '2',
    nombreCompleto: 'Ayuntamiento de Berriozar, Berriozar',
    lugarPrincipal: 'Ayuntamiento de Berriozar',
    lugarSecundario: 'Berriozar',
    localizacion: new Localizacion(42.835863, -1.674339)
  }
  ];

  getAddressSugestions(filtro: string): Observable<SugerenciaDireccion[]> {
    return Observable.create(observer => {
      let sugerenciasFiltradas = this.sugerencias.filter(sug => sug.nombreCompleto.toLowerCase().indexOf(filtro.toLowerCase()) != -1);
      observer.next(sugerenciasFiltradas);
      observer.complete();
    });
  }

  getLatLngByPlace(placeId: string): Observable<Localizacion> {
    return Observable.create(observer => {
      let localizacion = this.sugerencias.filter(sug => sug.id == placeId)[0].localizacion;
      observer.next(localizacion);
      observer.complete();
    });
  }

  getPlaceByLatLng(loc: Localizacion): Observable<Direccion> {
    return Observable.create(observer => {
      let place = this.sugerencias.filter(sug => sug.localizacion.latitud == loc.latitud && sug.localizacion.longitud == loc.longitud)[0].localizacion;
      observer.next(place);
      observer.complete();
    });
  }

}
