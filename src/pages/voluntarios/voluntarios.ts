import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';


@IonicPage()
@Component({
  selector: 'voluntarios-page',
  templateUrl: 'voluntarios.html',
})
export class VoluntariosPage {

  errorMessage: string;
 
  private subscriptions: Subscription = new Subscription();

  constructor(
    private navCtrl: NavController
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

