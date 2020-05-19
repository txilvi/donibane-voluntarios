import { Injectable } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform, App, ActionSheetController } from 'ionic-angular';
import { I18nService, extract } from '@core/i18n/i18n.service';


@Injectable()
export class CordovaProvider {

  private actionSheet = null;

  constructor(
    private platform: Platform,
    private app: App,
    private statusBar: StatusBar,
    private actionSheetCtrl: ActionSheetController,
    private i18nService: I18nService,
    private splashScreen: SplashScreen) { }

  init() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    this.registerBackButtonAction();
  }

  private registerBackButtonAction() {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      if (!nav.canGoBack()) {
        if (this.actionSheet) return;
        this.actionSheet = this.actionSheetCtrl.create({
          title: this.i18nService.instant(extract('¿Deseas salir de la aplicación de Donibane?')),
          buttons: [
            {
              text: this.i18nService.instant(extract('No')),
              role: 'cancel',
              handler: () => {
                this.actionSheet = null;
              }
            },
            {
              text: this.i18nService.instant(extract('Salir')),
              handler: () => {
                this.platform.exitApp();
              }
            }
          ]
        });
        this.actionSheet.present();
      }
    });
  }

}
