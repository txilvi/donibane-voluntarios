import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomHeaderComponent } from '@components/custom-header/custom-header';

@NgModule({
  declarations: [
    CustomHeaderComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CustomHeaderComponent
  ]
})
export class CustomHeaderModule {}

