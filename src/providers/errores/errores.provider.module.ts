import { NgModule } from '@angular/core';

import { EnvSettings } from '@environment';
import { IErroresProvider } from '@providers/errores/errores.provider.interface';
import { ErroresProvider } from '@providers/errores/errores.provider';
import { ErroresProviderFake } from '@providers/errores/errores.provider.fake';


@NgModule({
  providers: [
    { provide: IErroresProvider, useClass: EnvSettings.realServer ? ErroresProvider : ErroresProviderFake }
  ]
})
export class ErroresProviderModule {}

