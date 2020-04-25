import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LoadingController, Loading, ToastController, Platform } from 'ionic-angular';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { Diagnostic } from '@ionic-native/diagnostic';
import { extract } from '@core/i18n/i18n.service';
import 'rxjs/add/operator/mergeMap';

import { Localizacion, Marcador } from '@providers/geolocalizacion/geolocalizacion.model';
import { IMapaProvider } from '@providers/geolocalizacion/mapa.provider.interface';
import { AppSettings } from '@app/app.constants';
import { Excursion } from '@providers/excursiones/excursiones.model';
import { MapaHelper } from '@providers/geolocalizacion/mapa.helper';

@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapaComponent  {

  
  @Input() maintainZoom: boolean;
  @Input() excursiones?: Excursion[];
  @Input() centro?: Localizacion;
  @Input() localizacionUsuario?: Localizacion;
  @Input() mostrarMsgLocalizacionUsuario?: boolean = true;
  @Input() oculto?: boolean = false;
  @Input() info?: string;
  @Output() mapaCargado = new EventEmitter<any>();

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('infoWindow') infoWindowElement: ElementRef;
  @ViewChild('infoWindowAddress') infoWindowAddressElement: ElementRef;
  
  //Otros
  errorMessage: string;
  showSpinner: boolean = true;
  dea: Excursion;

  private subscriptions: Subscription = new Subscription();
  private mapa: any;
  private marcadores: Marcador[];
  private loader: Loading;
  private readonly deaIcon: string = 'assets/imgs/icon_excursion_map.png';

  constructor(
    private mapaProvider: IMapaProvider,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private diagnostic: Diagnostic,
    private platform: Platform,
    private mapaHelper: MapaHelper
  ) { }


  ngOnInit() {
    if (!this.oculto) {
      this.checkGpsActivated();
      this.presentLoading('Cargando mapa...');
    }
    this.loadMap();
  }

  ngOnChanges(inputChanges: any) {
    if ((inputChanges.centro && inputChanges.centro.currentValue && !inputChanges.centro.firstChange) ||
      (inputChanges.localizacionUsuario && inputChanges.localizacionUsuario.currentValue && !inputChanges.localizacionUsuario.firstChange) ||
      (inputChanges.excursiones && inputChanges.excursiones.currentValue && JSON.stringify(inputChanges.excursiones.currentValue) != JSON.stringify(this.excursiones) && !inputChanges.excursiones.firstChange)) {
      if (!this.mapa) {
        this.loadMap();
      }
      //this.ref.markForCheck();
      this.loadMarkers();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }


  private checkGpsActivated() {
    if (!this.mostrarMsgLocalizacionUsuario) {
      return;
    }
    this.platform.ready().then(() => {
      this.diagnostic.isLocationEnabled().then(
        () => {
          this.presentToast('Gps activado', 'succesToast');
        })
        .catch(() => {
          this.presentToast('No tienes el GPS activado. Por tanto tu localización no será exacta.', 'warningToast');
        });
    });
  }

  private loadMap() {
    this.subscriptions.add(
      this.mapaProvider.loadMap(this.mapElement.nativeElement, this.localizacionUsuario)
        .pipe(finalize(() => {
          this.showSpinner = false;
          if (this.loader) {
            this.loader.dismiss();
          }
        }))
        .mergeMap((mapa) => {
          this.mapa = mapa;
          this.mapaCargado.emit(mapa);
          if (this.excursiones) {
            this.setMarkers();
            return this.mapaProvider.addMarkers(mapa, this.marcadores, false);
          }
        })
        .subscribe(
        () => {
          this.setCenterAndZoom();
        },
        () => {
          this.errorMessage = extract('Se ha producido un error al cargar el mapa');
        })
    );
  }

  private loadMarkers() {
    this.presentLoading('Actualizando mapa...');
    this.setMarkers();
    this.subscriptions.add(
      this.mapaProvider.addMarkers(this.mapa, this.marcadores, false)
        .pipe(finalize(() => {
          this.showSpinner = false;
          setTimeout(() => {
            this.loader.dismiss();
          }, 2000);
        }))
        .subscribe(() => {
          if (!this.maintainZoom) this.setCenterAndZoom();
        })
    );
  }

  private setMarkers() {
    if (!this.excursiones && this.centro) {
      this.marcadores = [];
      let marcador = new Marcador(this.centro.latitud, this.centro.longitud, this.deaIcon, null);
      this.marcadores.push(marcador);
    } else {
      this.marcadores = this.excursiones.map((ex) => {
        let coordenadas = ex.point.coordinates.split(',');
        let marcador = new Marcador(Number(coordenadas[1]), Number(coordenadas[0]), this.deaIcon, this.mapaHelper.createInfoWindowExcursion(ex));
        return marcador;
      });
    }
  }

  private setCenterAndZoom() {
    if (this.centro != null) {
      this.mapaProvider.setCenter(this.mapa, this.centro);
      this.mapaProvider.setZoom(this.mapa, 14);
    }
    else {
      this.mapaProvider.setCenter(this.mapa);
      this.mapaProvider.setZoom(this.mapa, 9);
    }
  }

  private presentToast(message: string, cssClass: string) {
    let toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      duration: AppSettings.toastDuration,
      closeButtonText: 'Aceptar',
      position: 'top',
      cssClass: cssClass
    });
    toast.present();
  }

  private presentLoading(content) {
    this.loader = this.loadingCtrl.create({
      content: content
    });
    this.loader.present();
  }
  
}


