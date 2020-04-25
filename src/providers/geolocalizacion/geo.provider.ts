import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IGeoProvider } from '@providers/geolocalizacion/geo.provider.interface';
import { Localizacion } from '@providers/geolocalizacion/geolocalizacion.model';
import { Utils } from '@shared/utils/utils';


declare var google: any;
declare var window: any;

@Injectable()
export class GeoProvider implements IGeoProvider {


  getUserLocation(): Observable<Localizacion> {
    let localizacion: Localizacion;
    return Observable.create(observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          localizacion = {
            latitud: position.coords.latitude,
            longitud: position.coords.longitude
          };
          observer.next(localizacion);
          observer.complete();
        },
        (error) => {
          observer.error('Error obteniendo localizacion: ' + error);
        });
      }
    });
  }

  getGeographicDistance(localizacion: Localizacion, localizacion2: Localizacion): number {
    let latLng = new google.maps.LatLng(localizacion.latitud, localizacion.longitud);
    let latLng2 = new google.maps.LatLng(localizacion2.latitud, localizacion2.longitud);
    return Utils.roundNumber(google.maps.geometry.spherical.computeDistanceBetween(latLng, latLng2) / 1000);
  }

  calculateRoute(localizacion: Localizacion, localizacion2: Localizacion): number {
    let km = 0;
    let pointA = new google.maps.LatLng(localizacion.latitud, localizacion.longitud);
    let pointB = new google.maps.LatLng(localizacion2.latitud, localizacion2.longitud);
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();
    let selectedMode = 'DRIVING';
    directionsService.route(
      {
        origin: pointA,
        destination: pointB,
        unitSystem: google.maps.UnitSystem.METRIC,
        travelMode: google.maps.TravelMode[selectedMode]
      },
      (response, status) => {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          km = Math.round(directionsDisplay.getDirections().routes[directionsDisplay.getRouteIndex()].legs[0].distance.value / 1000);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    return km;
  }


}
