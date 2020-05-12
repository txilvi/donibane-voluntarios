import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'ayuda-page',
  templateUrl: 'ayuda.html',
})
export class AyudaPage {

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



  goPage(page: string, options?: any) {
    this.navCtrl.push(page, options, {animate: false});
  }
}

