import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { Usuario } from '@providers/usuarios/usuarios.model';
import { IUsuarioProvider } from '@providers/usuarios/usuarios.provider.interface';


@IonicPage()
@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
})
export class HomePage {

  usuario: Usuario;
  title: string;

  errorMessage: string;
 
  private subscriptions: Subscription = new Subscription();

  constructor(
    private usuarioProvider: IUsuarioProvider
  ) {}

  ngOnInit() {
    this.loadInformacion();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private loadInformacion() {
    this.subscriptions.add(
        this.usuarioProvider.getUsuarioById('1').subscribe(
          (usuario) => {
            this.usuario = usuario;
          },
          (err) => {
            this.errorMessage = 'En este momento no se pueden recuperar las actividades.' + err;
          })
    );
  }

}

