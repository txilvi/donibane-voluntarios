import { NgModule } from '@angular/core';

import { EnvSettings } from '@environment';
import { IUsuarioProvider } from './usuarios.provider.interface';
import { UsuarioProvider } from './usuarios.provider';
import { UsuarioProviderFake } from './usuarios.provider.fake';


@NgModule({
  providers: [
    { provide: IUsuarioProvider, useClass: EnvSettings.realServer ? UsuarioProvider : UsuarioProviderFake }
  ]
})

export class UsuarioProviderModule {}
