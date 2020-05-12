import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { IonicPage } from 'ionic-angular';

import { Excursion } from '@providers/excursiones/excursiones.model';
import { IExcursionesProvider } from '@providers/excursiones/excursiones.provider.interface';
import { IGeoProvider } from '@providers/geolocalizacion/geo.provider.interface';
import { Localizacion } from '@providers/geolocalizacion/geolocalizacion.model';

@IonicPage()
@Component({
  selector: 'mapa-page',
  templateUrl: 'mapa.html',
})
export class MapaPage implements OnInit, OnDestroy {
  
  puntosTotales: number;
  excursiones: Excursion[];
  errorMessage: string;
 
  private subscriptions: Subscription = new Subscription();

  constructor(
    private excursionesProvider: IExcursionesProvider,
    private geoProvider: IGeoProvider
  ) {}

  ngOnInit() {
    this.cargaDatos();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }


  private cargaDatos() {
    this.subscriptions.add(this.excursionesProvider.getExcursiones()
      .subscribe((excursiones) => {
        excursiones.forEach(ex => {
          let coordenadas = ex.point.coordinates.split(',');
          let localizacionExcursion = new Localizacion(Number(coordenadas[1]), Number(coordenadas[0]));
          ex.distanciaUsuario = this.geoProvider.getGeographicDistance(new Localizacion(42.8168700, -1.6432300), localizacionExcursion);
        });
        this.excursiones = excursiones.sort(e => e.distanciaUsuario);
      }));
  }
}

