import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings, RecaptchaFormsModule } from 'ng-recaptcha';
import { CacheModule } from 'ionic-cache';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnvSettings } from '@environment';

import localeEs from '@angular/common/locales/es';
import localeEu from '@angular/common/locales/eu';

import { SanJuanXarApp } from '@app/app.component';
import { CoreModule } from '@core/core.module';
import { MyMissingTranslationHandler } from '@core/i18n/i18n.missing.handler';
import { SharedModule } from '@shared/shared.module';

//Providers
import { registerLocaleData } from '@angular/common';
import { GeoLocalizacionProviderModule } from '@providers/geolocalizacion/geolocalizacion.provider.module';
import { CordovaProviderModule } from '@providers/cordova/cordova.provider.module';
import { ErroresProviderModule } from '@providers/errores/errores.provider.module';
import { CorreosProviderModule } from '@providers/correos/correos.provider.module';


//Pages
import { HomeModule } from '@pages/home/home.module';
import { QueHacemosModule } from '@pages/que-hacemos/que-hacemos.module';
import { VoluntariosModule } from '@pages/voluntarios/voluntarios.module';
import { AyudaModule } from '@pages/ayuda/ayuda.module';
import { ContactoModule } from '@pages/contacto/contacto.module';
import { GaleriaModule } from '@pages/galeria/galeria.module';

registerLocaleData(localeEs);
registerLocaleData(localeEu);

@NgModule({
  declarations: [
    SanJuanXarApp
  ],
  imports: [
    RecaptchaModule,
    RecaptchaFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler },
      useDefaultLang: false
    }),
    IonicModule.forRoot(SanJuanXarApp),
    IonicStorageModule.forRoot(),
    CacheModule.forRoot({ keyPrefix: 'maestras'}),
    SharedModule.forRoot(),
    CoreModule,
    HomeModule,
    QueHacemosModule,
    AyudaModule,
    VoluntariosModule,
    ContactoModule,
    GaleriaModule,
    CorreosProviderModule,
    GeoLocalizacionProviderModule,
    ErroresProviderModule,
    CordovaProviderModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SanJuanXarApp
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: EnvSettings.captcha,
      } as RecaptchaSettings
    }
  ]
})
export class AppModule { }


