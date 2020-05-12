import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Correo } from './correos.model';


@Injectable()
export abstract class ICorreosProvider {
  abstract mandarCorreo(correo: Correo): Observable<boolean>;
}
