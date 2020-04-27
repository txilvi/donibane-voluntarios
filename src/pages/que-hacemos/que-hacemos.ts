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
    let contenido = 'data:image/jpeg;base64,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';
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

