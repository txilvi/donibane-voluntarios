import { Injectable } from '@angular/core';

import { EnvSettings } from '@environment';

declare const window: any;

@Injectable()
export class EnvProvider {

  private pathname: string;

  constructor() {
    this.pathname = window.location.pathname;
  }

  getBasePath(index = false) {
    if (index) {
      return this.pathname;
    }
    else {
      return this.pathname.replace('index.html', '');
    }
  }

  getApiUrl() {
    if (!EnvSettings.realCordova && EnvSettings.realServer && window.location.hostname === 'localhost') {
      return window.location.protocol + '//' + window.location.hostname + EnvSettings.vbasepath;
    }
    else if (EnvSettings.realCordova) {
      return '';
    }
    else {
      return EnvSettings.api;
    }
  }

  isCordova() {
    return EnvSettings.appType == 'cordova';
  }

}
