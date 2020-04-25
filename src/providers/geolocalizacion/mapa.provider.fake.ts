import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Localizacion, Marcador } from '@providers/geolocalizacion/geolocalizacion.model';
import { IMapaProvider } from '@providers/geolocalizacion/mapa.provider.interface';
import { AppSettings } from '@app/app.constants';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

declare var google: any;

@Injectable()
export class MapaProviderFake implements IMapaProvider {

  private markers: google.maps.Marker[] = [];
  private drag: Subject<Localizacion> = new BehaviorSubject(null);
  getDrag$ = this.drag.asObservable();

  constructor(
    private zone: NgZone) {
  }

  loadMap(elementoDom: HTMLElement, currentLocation?: Localizacion, centerLocation?: Localizacion): Observable<any> {
    let center = new google.maps.LatLng(AppSettings.defaultCenter.lat, AppSettings.defaultCenter.lng);
    if (centerLocation)
      center = new google.maps.LatLng(centerLocation.latitud, centerLocation.longitud);

    let opts = {
      center: center,
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      fullscreenControl: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_LEFT
      }
    };

    return Observable.create(observer => {
      let map = new google.maps.Map(elementoDom, opts);
      if (currentLocation) {
        let infowindow = new google.maps.InfoWindow();
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(currentLocation.latitud, currentLocation.longitud),
          map: map,
          icon: 'assets/imgs/current-location.png'
        });

        google.maps.event.addListener(marker, 'click', (function (marker) {
          return function () {
            infowindow.setContent('Tu localización');
            infowindow.open(map, marker);
          };
        })(marker));
      }

      observer.next(map);
      observer.complete();
    });
  }

  addMarkers(map: any, marcadores: Marcador[], draggable: boolean = false): Observable<any> {
    return Observable.create(observer => {
      this.zone.run(() => {
        this.clearMarkers();

      
        let infowindow = new google.maps.InfoWindow({ maxWidth: 290, maxHeight: 300 } );
        google.maps.event.addListener(map, 'click', function () {
          infowindow.close();
        });

        marcadores.map((marcador) => {
          if (marcador && marcador.latitud != null && marcador.longitud != null) {
            
            infowindow.setContent(marcador.contenido);
            
            let marker = new google.maps.Marker({
              position: new google.maps.LatLng(marcador.latitud, marcador.longitud),
              map: map,
              draggable: draggable,
              icon: marcador.icon
            });

            google.maps.event.addListener(marker, 'click', (function (marker) {
              return function () {
                infowindow.setContent(marcador.contenido, { maxWidth: 320 });
                infowindow.open(map, marker);
              };
            })(marker));

            if (draggable) {
              this.setDraggable(marker);
            }

            this.markers.push(marker);

            if (marcadores.length == 1) {
              infowindow.open(map, marker);
            }
          }
        });

        if (marcadores.length > 1) {
          this.setCenterZoomDisplayMarkers(marcadores, map);
        }
        

        observer.next();
        observer.complete();
      });
    });
  }

  setCenterZoomDisplayMarkers(markers, map) {
    let latLngList: google.maps.LatLng[] = [];
    markers.map((marcador) => {
      if (marcador && marcador.latitud != null && marcador.longitud != null) {
        latLngList.push(new google.maps.LatLng(marcador.latitud, marcador.longitud));
      }
    });
    let latlngbounds = new google.maps.LatLngBounds();
    latLngList.forEach(function (latLng) {
      latlngbounds.extend(latLng);
    });
    map.setCenter(latlngbounds.getCenter());
    map.fitBounds(latlngbounds); 
  }

  setZoom(map: any, zoom: number) {
    map.setZoom(zoom);
  }

  setCenter(map: any, localizacion?: Localizacion) {
    let centro: google.maps.LatLng;
    if (!localizacion)
      centro = new google.maps.LatLng(AppSettings.defaultCenter.lat, AppSettings.defaultCenter.lng);
    else
      centro = new google.maps.LatLng(localizacion.latitud, localizacion.longitud);
    map.setCenter(centro);
  }

  setLongPressMap(map): Observable<Localizacion> {
    return Observable.create(observer => {
      let longpress = false;
      let start = 0;
      let end = 0;

      google.maps.event.addListener(map, 'click', function (event) {
        if (longpress) {
          let loc: Localizacion = new Localizacion(event.latLng.lat(), event.latLng.lng());
          observer.next(loc);
        }
      });

      google.maps.event.addListener(map, 'mousedown', function (_event) {
        start = new Date().getTime();
      });

      google.maps.event.addListener(map, 'mouseup', function (_event) {
        end = new Date().getTime();
        longpress = (end - start < 500) ? false : true;
      });

    });
  }


  private setDraggable(marker) {
    google.maps.event.addListener(marker, 'dragend', () => {
      let loc: Localizacion = new Localizacion(marker.getPosition().lat(), marker.getPosition().lng());
      this.drag.next(loc);
    });
  }

  clearMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
  }


}
