import { Injectable } from '@angular/core';

import { ICorreosProvider } from './correos.provider.interface';
import { Correo } from './correos.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CorreosProviderFake extends ICorreosProvider {

  constructor(
    private http: HttpClient
  ) {
    super();
  }


  mandarCorreo(correo: Correo): Observable<boolean> {
    const url = 'https://uhnoncd7cg.execute-api.eu-west-2.amazonaws.com';
    return this.http
      .config()
      .post<boolean>(url, JSON.stringify(correo));
  }
  
}

