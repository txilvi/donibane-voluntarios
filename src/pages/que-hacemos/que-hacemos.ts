import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { Imagen, eTipoImagen } from '@components/image-gallery/image-gallery.model';


@IonicPage()
@Component({
  selector: 'que-hacemos-page',
  templateUrl: 'que-hacemos.html',
})
export class QueHacemosPage {

  imagenes: Imagen[] = [];

  errorMessage: string;
 
  private subscriptions: Subscription = new Subscription();

  constructor(
  ) {}

  ngOnInit() {
    this.loadInformacion();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private loadInformacion() {
    this.imagenes = [];
    let imagen1 = new Imagen();
    imagen1.id = 1;
    imagen1.tipo = eTipoImagen.Normalizada;
    let contenido = '';
    imagen1.imagen = contenido;
    let imagen1Thumbnail = new Imagen();
    imagen1Thumbnail.id = 1;
    imagen1Thumbnail.tipo = eTipoImagen.Thumbnail;
    imagen1Thumbnail.imagen = contenido;
    this.imagenes.push(imagen1);
    this.imagenes.push(imagen1Thumbnail);
  }

  verImagenes() {
   // let modalImagenes = this.modalCtrl.create('ModalImagenes', {imagenes: this.imagenes});
   // modalImagenes.present();
  }
}

