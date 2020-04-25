import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Usuario } from './usuarios.model';
import { IUsuarioProvider } from './usuarios.provider.interface';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class UsuarioProvider extends IUsuarioProvider {

  private dbPath: string = '/usuarios';

  constructor(
    private db: AngularFireDatabase
  ) {
    super();
  }

  getUsuarioById(id: string): Observable<Usuario> {
    this.db.object(this.dbPath + '/' + id).snapshotChanges().map(res => {
      return res.payload.val();
    });
    return Observable.of({ id: '1', nombre: 'Sara'});
  }

  getUsuarios(): Observable<Usuario[]>
  {
    let usuarios = this.db.list(this.dbPath);
    return usuarios.valueChanges();
  }

}
