import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './usuarios.model';
import { IUsuarioProvider } from './usuarios.provider.interface';

@Injectable()
export class UsuarioProviderFake extends IUsuarioProvider {

  readonly url = '/usuarios';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getUsuarioById(id: string): Observable<Usuario> {
    const urlBackend = this.url + '?id=' + id;

    return this.http
      .config({ cache: true })
      .get<Usuario>(urlBackend);
  }

  getUsuarios(): Observable<Usuario[]> {
    const urlBackend = this.url;

    return this.http
      .config({ cache: true })
      .get<Usuario[]>(urlBackend);
  }

}
