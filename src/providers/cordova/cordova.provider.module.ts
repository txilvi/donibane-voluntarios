import { NgModule } from '@angular/core';
import { EnvSettings } from '@environment';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Globalization } from '@ionic-native/globalization';

import { SplashScreenMock } from '@ionic-native-mocks/splash-screen';
import { StatusBarMock } from '@ionic-native-mocks/status-bar';

//Sin Mock
import { Diagnostic } from '@ionic-native/diagnostic';

import { EmptyProvider } from '@providers/cordova/empty.provider';
import { CordovaProvider } from '@providers/cordova/cordova.provider';

const isWeb = EnvSettings.appType != 'cordova';
const isCordovaMockable = EnvSettings.appType == 'cordova' && !EnvSettings.realCordova;


@NgModule({
  providers: [
    {
      provide: SplashScreen,
      useClass: isWeb ? EmptyProvider : (!isCordovaMockable ? SplashScreen : SplashScreenMock)
    },
    {
      provide: StatusBar,
      useClass: isWeb ? EmptyProvider : (!isCordovaMockable ? StatusBar : StatusBarMock)
    },
    {
      provide: Globalization,
      useClass:  Globalization 
    },
    Diagnostic,
    CordovaProvider
  ]
})
export class CordovaProviderModule {}
