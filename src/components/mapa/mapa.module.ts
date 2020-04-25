import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MapaComponent } from './mapa';

@NgModule({
  declarations: [
    MapaComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    MapaComponent
  ]
})
export class MapaModule {}

