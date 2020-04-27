import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';
import { CacheModule } from 'ionic-cache';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { HockeyApp } from 'ionic-hockeyapp';

import localeEs from '@angular/common/locales/es';
import localeEu from '@angular/common/locales/eu';

import { SanJuanXarApp } from '@app/app.component';
import { CoreModule } from '@core/core.module';
import { MyMissingTranslationHandler } from '@core/i18n/i18n.missing.handler';
import { EnvSettings } from '@environment';
import { SharedModule } from '@shared/shared.module';

//Providers
import { registerLocaleData } from '@angular/common';
import { GeoLocalizacionProviderModule } from '@providers/geolocalizacion/geolocalizacion.provider.module';
import { UsuarioProviderModule } from '@providers/usuarios/usuarios.provider.module';
import { CordovaProviderModule } from '@providers/cordova/cordova.provider.module';
import { ActividadesProviderModule } from '@providers/actividades/actividades.provider.module';
import { ExcursionesProviderModule } from '@providers/excursiones/excursiones.provider.module';
import { ErroresProviderModule } from '@providers/errores/errores.provider.module';


//Pages
import { MapaActividadModule } from '@pages/mapa/mapa.module';
import { HomeModule } from '@pages/home/home.module';
import { QueHacemosModule } from '@pages/que-hacemos/que-hacemos.module';

registerLocaleData(localeEs);
registerLocaleData(localeEu);

@NgModule({
  declarations: [
    SanJuanXarApp
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
      useDefaultLang: false
    }),
    IonicModule.forRoot(SanJuanXarApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(EnvSettings.firebaseConfig),
    AngularFireDatabaseModule,
    CacheModule.forRoot({ keyPrefix: 'maestras'}),
    SharedModule.forRoot(),
    CoreModule,
    HomeModule,
    QueHacemosModule,
    MapaActividadModule,
    ActividadesProviderModule,
    UsuarioProviderModule,
    ExcursionesProviderModule,
    GeoLocalizacionProviderModule,
    ErroresProviderModule,
    CordovaProviderModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SanJuanXarApp
  ],
  providers: [
    AngularFireDatabase,
    NativePageTransitions,
    HockeyApp
  ]
})
export class AppModule { }


