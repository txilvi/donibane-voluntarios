import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Usuario } from './usuarios.model';

@Injectable()
export abstract class IUsuarioProvider {
  
  abstract getUsuarioById(id: string): Observable<Usuario>;
  abstract getUsuarios(): Observable<Usuario[]>;
 
}
