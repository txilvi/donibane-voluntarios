import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Printer, PrintOptions } from '@ionic-native/printer';

import { EnvProvider } from '@env/env.provider';

declare const window: any;

@Injectable()
export class PrintProvider {

  constructor(
    private printer: Printer,
    private envProvider: EnvProvider, 
    @Inject(DOCUMENT) private document: any)
  {}

  print(documentName: string) {
    if (this.envProvider.isCordova()) {
      let basePath = window.cordova.file.applicationDirectory + 'www/';
      let styles = '<head><base href=\"' + basePath + '\" /><link rel=\"stylesheet\" href=\"css/styles.bundle.css\" /></head>';
      let page = this.document.getElementsByClassName('print-page')[0].outerHTML;
      let printPage = '<body class="platform-cordova">' + page + '</body>';
      let printOptions: PrintOptions = {
        name: documentName
      };
      return this.printer.print(styles + printPage,  printOptions);
    } else {
      return window.print();
    }
  }

}
