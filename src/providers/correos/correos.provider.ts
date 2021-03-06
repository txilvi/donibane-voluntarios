import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICorreosProvider } from './correos.provider.interface';
import { Observable } from 'rxjs/Observable';
import { Correo } from './correos.model';



@Injectable()
export class CorreosProvider extends ICorreosProvider {

  constructor(
    private http: HttpClient
  ) {
    super();
  }


  mandarCorreo(correo: Correo): Observable<boolean> {
    const url = 'https://772bxqhxu9.execute-api.eu-west-2.amazonaws.com/prod/email';
    return this.http
      .config()
      .post<boolean>(url, JSON.stringify(correo));
  }
  
}

