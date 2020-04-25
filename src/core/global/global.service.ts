import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { GlobalData } from './global.model';

@Injectable()
export class GlobalService {

  globalData: GlobalData = new GlobalData();
  private globalDataSubject: BehaviorSubject<any> = new BehaviorSubject({});
  globalData$: Observable<GlobalData> = this.globalDataSubject.asObservable();

  deleteGlobalData() {
    this.globalData = new GlobalData();
  }
}
