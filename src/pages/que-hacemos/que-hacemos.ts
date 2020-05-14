import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { Imagen } from '@components/image-gallery/image-gallery.model';


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
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  goPage(page: string) {
    this.navCtrl.push(page,  {
      'esFormularioAyuda': false
    },  {animate: false});
  }
}

