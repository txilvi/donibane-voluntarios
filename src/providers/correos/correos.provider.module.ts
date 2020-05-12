import { NgModule } from '@angular/core';

import { EnvSettings } from '@environment';
import { ICorreosProvider } from './correos.provider.interface';
import { CorreosProvider } from './correos.provider';
import { CorreosProviderFake } from './correos.provider.fake';


@NgModule({
  providers: [
    { provide: ICorreosProvider, useClass: EnvSettings.realServer ? CorreosProvider : CorreosProviderFake }
  ]
})
export class CorreosProviderModule {}

