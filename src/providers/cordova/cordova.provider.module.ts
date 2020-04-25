import { NgModule } from '@angular/core';
import { EnvSettings } from '@environment';

import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Printer } from '@ionic-native/printer';
import { Globalization } from '@ionic-native/globalization';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { KeyboardMock } from '@ionic-native-mocks/keyboard';
import { SplashScreenMock } from '@ionic-native-mocks/splash-screen';
import { StatusBarMock } from '@ionic-native-mocks/status-bar';
import { SocialSharingMock } from '@ionic-native-mocks/social-sharing';
import { PrinterMock } from '@ionic-native-mocks/printer';
import { NativePageTransitionsMock } from '@ionic-native-mocks/native-page-transitions';

//Sin Mock
import { Diagnostic } from '@ionic-native/diagnostic';
import { GoogleMaps } from '@ionic-native/google-maps';

import { EmptyProvider } from '@providers/cordova/empty.provider';
import { CordovaProvider } from '@providers/cordova/cordova.provider';

const isWeb = EnvSettings.appType != 'cordova';
const isCordovaMockable = EnvSettings.appType == 'cordova' && !EnvSettings.realCordova;


@NgModule({
  providers: [
    {
      provide: Keyboard,
      useClass: isWeb ? EmptyProvider : (!isCordovaMockable ? Keyboard : KeyboardMock)
    },
    {
      provide: SplashScreen,
      useClass: isWeb ? EmptyProvider : (!isCordovaMockable ? SplashScreen : SplashScreenMock)
    },
    {
      provide: StatusBar,
      useClass: isWeb ? EmptyProvider : (!isCordovaMockable ? StatusBar : StatusBarMock)
    },
    {
      provide: SocialSharing,
      useClass: isWeb ? EmptyProvider : (!isCordovaMockable ? SocialSharing : SocialSharingMock)
    },
    {
      provide: Printer,
      useClass: isWeb ? EmptyProvider : (!isCordovaMockable ? Printer : PrinterMock)
    },
    {
      provide: NativePageTransitions,
      useClass: isWeb ? EmptyProvider : (!isCordovaMockable ? NativePageTransitions : NativePageTransitionsMock)
    },
    {
      provide: Globalization,
      useClass:  Globalization 
    },
    Diagnostic,
    GoogleMaps,
    CordovaProvider
  ]
})
export class CordovaProviderModule {}
