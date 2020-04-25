import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CacheService } from 'ionic-cache';

import { IExcursionesProvider } from '@providers/excursiones/excursiones.provider.interface';
import { Excursion } from '@providers/excursiones/excursiones.model';



@Injectable()
export class ExcursionesProviderFake extends IExcursionesProvider {

  readonly url = '/excursiones';

  constructor(
    private http: HttpClient,
    private cacheStorage: CacheService
  ) {
    super();
  }

  getExcursiones(): Observable <Excursion[]> {
    let request = this.http.config({ cache: true })
      .get <Excursion[]>(this.url);
    return this.cacheStorage.loadFromDelayedObservable(this.url, request, undefined, undefined, 'all');
  }

  
}
