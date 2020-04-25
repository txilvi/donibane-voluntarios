import { Injectable } from '@angular/core';
import { GoogleMapOptions, GoogleMaps, Marker, LatLng, HtmlInfoWindow, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { Localizacion, Marcador } from '@providers/geolocalizacion/geolocalizacion.model';
import { IMapaProvider } from '@providers/geolocalizacion/mapa.provider.interface';
import { AppSettings } from '@app/app.constants';
import { BreakpointProvider } from '@shared/providers/breakpoint.provider';


@Injectable()
export class MapaProvider implements IMapaProvider {

  private markers: Marker[] = [];
  private drag: Subject<Localizacion> = new BehaviorSubject(null);
  getDrag$ = this.drag.asObservable();


  constructor(
    private breakpointProvider: BreakpointProvider
  ) {}

  loadMap(elementoDom: HTMLElement, currentLocation?: Localizacion, centerLocation?: Localizacion): Observable<any> {
    let latLng = new LatLng(AppSettings.defaultCenter.lat, AppSettings.defaultCenter.lng);
    if (centerLocation)
      latLng = new LatLng(centerLocation.latitud, centerLocation.longitud);

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: latLng,
        zoom: 10,
        tilt: 30
      }
    };

    return Observable.create(observer => {
      let map = GoogleMaps.create(elementoDom, mapOptions);
      if (currentLocation) {
        map.addMarkerSync({
          title: 'Tu localización',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: currentLocation.latitud,
            lng: currentLocation.longitud
          }
        });
      }
      observer.next(map);
      observer.complete();
    });
  }


  addMarkers(map: any, marcadores: Marcador[], draggable: boolean = false): Observable<any> {
    return Observable.create(observer => {
      this.clearMarkers();
      let maxWidth = 700;
      if (this.breakpointProvider.breakpoint == 'xs') {
        maxWidth = 320;
      }

      marcadores.map((marcador) => {
        if (marcador && marcador.latitud != null && marcador.longitud != null) {
          let infowindow = new HtmlInfoWindow();
          infowindow.setContent(marcador.contenido, {maxWidth: maxWidth });
          let marker: Marker = map.addMarkerSync({
            icon: marcador.icon,
            draggable: draggable,
            animation: 'DROP',
            position: {
              lat: marcador.latitud,
              lng: marcador.longitud
            }
          });

          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            infowindow.open(marker);
          });

          marker.trigger(GoogleMapsEvent.MARKER_CLICK);

          if (draggable) {
            this.setDraggable(marker);
          }

          this.markers.push(marker);
        }
        
      });

      if (marcadores.length > 1) {
        this.setCenterZoomDisplayMarkers(marcadores, map);
      }

      observer.next();
      observer.complete();
    });
  }

  setCenterZoomDisplayMarkers(markers, map) {
    let latLngList: google.maps.LatLng[] = [];
    markers.map((marcador) => {
      latLngList.push(new google.maps.LatLng(marcador.latitud, marcador.longitud));
    });
    let latlngbounds = new google.maps.LatLngBounds();
    latLngList.forEach(function (latLng) {
      latlngbounds.extend(latLng);
    });
    map.setCenter(latlngbounds.getCenter());
    map.fitBounds(latlngbounds);
  }


  setZoom(map: any, zoom: number) {
    map.setCameraZoom(zoom);
  }

  setCenter(map: any, localizacion?: Localizacion) {
    let centro: LatLng;
    if (!localizacion)
      centro = new LatLng(AppSettings.defaultCenter.lat, AppSettings.defaultCenter.lng);
    else
      centro = new LatLng(localizacion.latitud, localizacion.longitud);
    map.setCameraTarget(centro);
  }

  setLongPressMap(map): Observable<Localizacion> {
    return Observable.create(observer => {
      map.on(GoogleMapsEvent.MAP_LONG_CLICK).subscribe((event) => {
        console.log('long click: ', event);
        let loc: Localizacion = new Localizacion(event[0].lat, event[0].lng);
        observer.next(loc);
      });
    });
  }

  clearMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].remove();
    }
  }

  private setDraggable(marker) {
    marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe(() => {
      let loc: Localizacion = new Localizacion(marker.getPosition().lat, marker.getPosition().lng);
      this.drag.next(loc);
    });
  }

}
