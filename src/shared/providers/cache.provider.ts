import { Injectable } from '@angular/core';
import { HttpCacheService } from '@core/http/http-cache/http-cache-service';
import { GlobalService } from '@core/global/global.service';
import { EnvProvider } from '@env/env.provider';

declare const window: any;

@Injectable()
export class CacheProvider {

  constructor(
    private httpCacheService: HttpCacheService,
    private globalService: GlobalService,
    private envProvider: EnvProvider
  ) { }

  deleteCachesAndCookies() {
    if (!this.envProvider.isCordova())
      return;
    if (window.cookieEmperor) {
      window.cookieEmperor.clearAll();
    }
    this.httpCacheService.cleanCache();
    this.globalService.deleteGlobalData();
  }
}
