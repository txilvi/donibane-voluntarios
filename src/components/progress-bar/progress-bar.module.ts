import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProgressBarComponent } from './progress-bar';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ProgressBarComponent,
  ],
  imports: [
    IonicModule,
    SharedModule
  ],
  exports: [
    ProgressBarComponent
  ]
})
export class ProgressBarModule {}

