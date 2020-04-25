import { Injectable } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Injectable()
export class CordovaProvider {

  constructor(
    private statusBar: StatusBar,
    private splashScreen: SplashScreen) { }

  init() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }


}
