import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { Imagen, eTipoImagen } from '@components/image-gallery/image-gallery.model';


@IonicPage()
@Component({
  selector: 'galeria-page',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {

  imagenes: Imagen[] = [];

  errorMessage: string;
 
  private subscriptions: Subscription = new Subscription();

  constructor(
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loadInformacion();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private loadInformacion() {
    this.imagenes = [];

    for (let i = 1; i <= 9; i++){
      let imagen = new Imagen();
      imagen.id = i;
      imagen.tipo = eTipoImagen.Normalizada;
      imagen.ruta = 'assets/imgs/actividad/actividad' + i + '.jpg';
      let imagenThumbnail = new Imagen();
      imagenThumbnail.id = i;
      imagenThumbnail.tipo = eTipoImagen.Thumbnail;
      imagenThumbnail.ruta = 'assets/imgs/actividad/actividad' + i + '.jpg';
      this.imagenes.push(imagen);
      this.imagenes.push(imagenThumbnail);
    }
  }
}

