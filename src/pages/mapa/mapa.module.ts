import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '@shared/shared.module';
import { MapaModule } from '@components/mapa/mapa.module';
import { CustomHeaderModule } from '@components/custom-header/custom-header.module';
import { MapaPage } from './mapa';

@NgModule({
  declarations: [
    MapaPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaPage),
    MapaModule,
    CustomHeaderModule,
    SharedModule
  ],
})
export class MapaActividadModule {}

