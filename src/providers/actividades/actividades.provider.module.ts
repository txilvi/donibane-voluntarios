import { NgModule } from '@angular/core';

import { EnvSettings } from '@environment';
import { ActividadesProviderFake } from '@providers/actividades/actividades.provider.fake';
import { IActividadesProvider } from '@providers/actividades/actividades.provider.interface';
import { ActividadesProvider } from '@providers/actividades/actividades.provider';


@NgModule({
  providers: [
    { provide: IActividadesProvider, useClass: EnvSettings.realServer ? ActividadesProvider : ActividadesProviderFake }
  ]
})
export class ActividadesProviderModule {}

