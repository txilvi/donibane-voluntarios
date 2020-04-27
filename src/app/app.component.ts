import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App } from 'ionic-angular';
import { CacheService } from 'ionic-cache';

import { AppSettings } from '@app/app.constants';
import { EnvProvider } from '@env/env.provider';
import { CordovaProvider } from '@providers/cordova/cordova.provider';
import { HockeyApp } from 'ionic-hockeyapp';
import { I18nService } from '@core/i18n/i18n.service';
import { QueHacemosPage } from '@pages/que-hacemos/que-hacemos';
import { HomePage } from '@pages/home/home';


@Component({
  templateUrl: 'app.html',
})
export class SanJuanXarApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  srcLogo: string;
  pages: any[] = [
    { component: QueHacemosPage , title: '¿Qué estamos haciendo?', icon: 'assets/imgs/icons/ayuda.png' }
  ];

  constructor(
    private envProvider: EnvProvider,
    private i18nService: I18nService,
    private cordovaProvider: CordovaProvider,
    private cacheStorage: CacheService,
    private app: App,
    private platform: Platform,
    private hockeyapp: HockeyApp
  ) {
    this.platform.ready().then(() => {
      // The Android ID of the app as provided by the HockeyApp portal. Can be null if for iOS only.
      let androidAppId = 'c90b91a744e54266af0a7c54d41735a7';
      // The iOS ID of the app as provided by the HockeyApp portal. Can be null if for android only.
      let iosAppId = null;
      // Specifies whether you would like crash reports to be automatically sent to the HockeyApp server when the end user restarts the app.
      let autoSendCrashReports = false;
      // Specifies whether you would like to display the standard dialog when the app is about to crash. This parameter is only relevant on Android.
      let ignoreCrashDialog = true;
   
      this.hockeyapp.start(androidAppId, iosAppId, autoSendCrashReports, ignoreCrashDialog);
   
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
