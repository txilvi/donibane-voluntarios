import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}

