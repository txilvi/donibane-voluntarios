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


  mandarCorreo(_correo: Correo): Observable<boolean> {
    const url = 'https://772bxqhxu9.execute-api.eu-west-2.amazonaws.com/prod/email';
    return this.http
      .config()
      .get<boolean>(url);
  }
  
}

