import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App } from 'ionic-angular';
import { CacheService } from 'ionic-cache';

import { AppSettings } from '@app/app.constants';
import { EnvProvider } from '@env/env.provider';
import { CordovaProvider } from '@providers/cordova/cordova.provider';
import { I18nService, extract } from '@core/i18n/i18n.service';
import { QueHacemosPage } from '@pages/que-hacemos/que-hacemos';
import { HomePage } from '@pages/home/home';
import { AyudaPage } from '@pages/ayuda/ayuda';
import { VoluntariosPage } from '@pages/voluntarios/voluntarios';
import { GaleriaPage } from '@pages/galeria/galeria';


@Component({
  templateUrl: 'app.html',
})
export class SanJuanXarApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  srcLogo: string;
  pages: any[] = [
    { component: QueHacemosPage , title: this.i18nService.instant(extract('¿Qué estamos haciendo?')), icon: 'assets/imgs/icons/ayuda.png' },
    { component: GaleriaPage , title: this.i18nService.instant(extract('Imágenes')), icon: 'assets/imgs/icons/galeria.png' },
    { component: AyudaPage , title: this.i18nService.instant(extract('Necesito ayuda')), icon: 'assets/imgs/usuarios/ayuda.png' },
    { component: VoluntariosPage , title: this.i18nService.instant(extract('Quiero ser voluntari@')), icon: 'assets/imgs/usuarios/voluntarios.png' }
  ];

  constructor(
    private envProvider: EnvProvider,
    private i18nService: I18nService,
    private cordovaProvider: CordovaProvider,
    private cacheStorage: CacheService,
    private app: App,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      //So app doesn't close when hockey app activities close
      //This also has a side effect of unable to close the app when on the rootPage and using the back button.
      //Back button will perform as normal on other pages and pop to the previous page.
      platform.registerBackButtonAction(() => {
        let nav = this.app.getRootNav();
        if (nav.canGoBack()) {
          nav.pop();
        } else {
          nav.setRoot(this.rootPage);
        }
      });
    });
    
    this.configureStorageCache();
  }

  ngOnInit() {
    this.i18nService.init();
    this.initCordova();
  }

  goTwitter() {
    window.open('https://twitter.com/SAN_JUAN_XAR', '_blank');
  }

  goFacebook() {
    window.open('https://www.facebook.com/sanjuan.xar', '_blank');
  }

  goYoutube() {
    window.open('https://www.youtube.com/channel/UCB1RCMLqPBkKPH-N-e1AkPg', '_blank');
  }  
  exitApp(){
    this.platform.exitApp();
  }

  private configureStorageCache() {
    this.cacheStorage.setDefaultTTL(AppSettings.cacheStorage.ttl);
    this.cacheStorage.setOfflineInvalidate(false);
  }

  private initCordova() {
    if (this.envProvider.isCordova()) {
      this.cordovaProvider.init();
    }
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
