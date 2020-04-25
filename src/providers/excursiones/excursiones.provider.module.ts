import { NgModule } from '@angular/core';

import { EnvSettings } from '@environment';
import { IExcursionesProvider } from '@providers/excursiones/excursiones.provider.interface';
import { ExcursionesProvider } from '@providers/excursiones/excursiones.provider';
import { ExcursionesProviderFake } from '@providers/excursiones/excursiones.provider.fake';


@NgModule({
  providers: [
    { provide: IExcursionesProvider, useClass: EnvSettings.realServer ? ExcursionesProvider : ExcursionesProviderFake }
  ]
})
export class ExcursionesProviderModule {}

