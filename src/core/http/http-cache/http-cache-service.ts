import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

const cachePersistenceKey = 'httpCache';

export interface HttpCacheEntry {
  lastUpdated: Date;
  data: HttpResponse<any>;
}

/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
@Injectable()
export class HttpCacheService {

  private cachedData: { [key: string]: HttpCacheEntry | null; } = {};
  private storage: Storage | null = null;

  constructor() {
    this.loadCacheData();
  }

  /**
   * Sets the cache data for the specified request.
   * @param {!string} url The request URL.
   * @param {any} params Optional request query parameters.
   * @param {ResponseOptions} data The received data.
   * @param {Date=} lastUpdated The cache last update, current date is used if not specified.
   */
  setCacheData(url: string, params: any, data: HttpResponse<any>, lastUpdated?: Date) {
    const cacheKey = this.getCacheKey(url, params);
    this.cachedData[cacheKey] = {
      lastUpdated: lastUpdated || new Date(),
      data: data
    };
    //log.debug('Cache set for key: "' + cacheKey + '"');
    this.saveCacheData();
  }

  /**
   * Gets the cached data for the specified request.
   * @param {!string} url The request URL.
   * @param {any=} params Optional request query parameters.
   * @return {?ResponseOptions} The cached data or null if no cached data exists for this request.
   */
  getCacheData(url: string, params?: any): HttpResponse<any> | null {
    const cacheKey = this.getCacheKey(url, params);
    const cacheEntry = this.cachedData[cacheKey];

    if (cacheEntry) {
      //log.debug('Cache hit for key: "' + cacheKey + '"');
      return cacheEntry.data;
    }

    return null;
  }

  /**
   * Gets the cached entry for the specified request.
   * @param {!string} url The request URL.
   * @param {any=} params Optional request query parameters.
   * @return {?HttpCacheEntry} The cache entry or null if no cache entry exists for this request.
   */
  getHttpCacheEntry(url: string, params?: any): HttpCacheEntry | null {
    return this.cachedData[this.getCacheKey(url, params)] || null;
  }

  /**
   * Clears the cached entry (if exists) for the specified request.
   * @param {!string} url The request URL.
   * @param {any=} params Optional request query parameters.
   */
  clearCache(url: string, params?: any): void {
    const cacheKey = this.getCacheKey(url, params);
    this.cachedData[cacheKey] = null;
    //log.debug('Cache cleared for key: "' + cacheKey + '"');
    this.saveCacheData();
  }

  /**
   * Cleans cache entries older than the specified date.
   * @param {date=} expirationDate The cache expiration date. If no date is specified, all cache is cleared.
   */
  cleanCache(expirationDate?: Date) {
    if (expirationDate) {
      for (let key in this.cachedData){
        let value: HttpCacheEntry = this.cachedData[key];
        if (expirationDate >= value.lastUpdated) {
          delete this.cachedData[key];
        }
      }
    } else {
      this.cachedData = {};
    }
    this.saveCacheData();
  }

  /**
   * Sets the cache persistence policy.
   * Note that changing the cache persistence will also clear the cache from its previous storage.
   * @param {'local'|'session'=} persistence How the cache should be persisted, it can be either local or session
   *   storage, or if no value is provided it will be only in-memory (default).
   */
  setPersistence(persistence?: 'local' | 'session') {
    this.cleanCache();
    this.storage = persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
    this.loadCacheData();
  }

  private getCacheKey(url: string, params?: any): string {
    return url + (params ? JSON.stringify(params) : '');
  }

  private saveCacheData() {
    if (this.storage) {
      this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
    }
  }

  private loadCacheData() {
    const data = this.storage ? this.storage[cachePersistenceKey] : null;
    this.cachedData = data ?  data : {};
  }

}
