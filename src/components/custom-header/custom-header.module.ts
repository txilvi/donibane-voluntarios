import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomHeaderComponent } from '@components/custom-header/custom-header';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    CustomHeaderComponent,
  ],
  imports: [
    SharedModule,
    IonicModule,
  ],
  exports: [
    CustomHeaderComponent
  ]
})
export class CustomHeaderModule {}

