import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SharedModule } from '@shared/shared.module';
import { FooterComponent } from './footer';


@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    SharedModule,
    IonicModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {}

