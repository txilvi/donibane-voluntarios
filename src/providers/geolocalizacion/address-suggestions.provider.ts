import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Localizacion, SugerenciaDireccion, Direccion } from '@providers/geolocalizacion/geolocalizacion.model';
import { IAddressSuggestionsProvider } from '@providers/geolocalizacion/address-suggestions.interface';


declare var google: any;
declare var window: any;

@Injectable()
export class AddressSuggestionsProvider implements IAddressSuggestionsProvider {

  private googleAutocompleteService: google.maps.places.AutocompleteService;
 
  constructor(
    private zone: NgZone
  ) {
    if (window.google) {
      this.googleAutocompleteService = new google.maps.places.AutocompleteService();
    }
  }

  getAddressSugestions(filtro: string): Observable<SugerenciaDireccion[]> {
    let sugerencias: SugerenciaDireccion[] = [];

    if (this.googleAutocompleteService == undefined)
      this.googleAutocompleteService = new google.maps.places.AutocompleteService();

    return Observable.create(observer => {
      if (filtro == null || filtro == '') {
        observer.next(sugerencias);
        observer.complete();
        return;
      }
      this.googleAutocompleteService.getPlacePredictions({
        input: filtro,
        componentRestrictions: {
          country: 'es'
        }
      }, (predictions: google.maps.places.AutocompletePrediction[]) => {
        this.zone.run(() => {
          sugerencias = [];
          if (predictions != null) {
            predictions.forEach((prediction) => {
              sugerencias.push(new SugerenciaDireccion(prediction.place_id, prediction.description, prediction.structured_formatting.main_text, prediction.structured_formatting.secondary_text));
            });
          }
          observer.next(sugerencias.slice(0, 9));
          observer.complete();
        });
      });
    });
  }

  getLatLngByPlace(placeId: string): Observable<Localizacion> {
    return Observable.create(observer => {
      let geocoder = new google.maps.Geocoder;
      geocoder.geocode({ 'placeId': placeId }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK && results[0]) {
          let position = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
          observer.next(new Localizacion(position.lat, position.lng));
        }
      });
    });
  }

  getPlaceByLatLng(loc: Localizacion): Observable<Direccion> {
    return Observable.create(observer => {
      let geocoder = new google.maps.Geocoder;
      let latlng = { lat: loc.latitud, lng: loc.longitud };
      geocoder.geocode({ 'location': latlng }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK && results[0]) {
          if (results[0].address_components && results[0].address_components.length > 2) {
            let direccion: Direccion = new Direccion(results[0].address_components[1].long_name, results[0].address_components[2].long_name);
            console.log(results[0]);
            observer.next(direccion);
            observer.complete();
          }
          /*let partesAddress = results[0].formatted_address.split(',');
          if (partesAddress.length > 2) {
            let direccion: Direccion = new Direccion(partesAddress[0], partesAddress[2]);
            console.log(results[0]);
            observer.next(direccion);
            observer.complete();
          }*/
          
        }
      });
    });
  }


}
