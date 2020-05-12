import { Component } from '@angular/core';
import { IonicPage, Loading } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { finalize } from 'rxjs/operators';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ICorreosProvider } from '@providers/correos/correos.provider.interface';
import { Correo } from '@providers/correos/correos.model';


@IonicPage()
@Component({
  selector: 'contacto-page',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  formContacto: FormGroup;
  errorMessage: string;
 
  private subscriptions: Subscription = new Subscription();
  private loader: Loading = null;

  constructor( 
    private formBuilder: FormBuilder,
    private correosProvider: ICorreosProvider
  ) {}

  ngOnInit() {
    this.formContacto = this.formBuilder.group({
      nombre: [null, Validators.compose([Validators.required])],
      telefono: [null, Validators.compose([Validators.maxLength(9), Validators.required])],
      email: [null, Validators.compose([])],
      quenecesitas: [null, Validators.compose([])]
    });
  }

  enviar() {
    let correo = new Correo(this.formContacto.value.nombre, this.formContacto.value.telefono, this.formContacto.value.email, this.formContacto.value.quenecesitas);
    this.correosProvider.mandarCorreo(correo)
    .pipe(finalize(() => {
      if (this.loader) this.loader.dismiss();
    }))
    .subscribe((res: boolean) => {
      if (res == true) {
        console.log('Ok');
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

