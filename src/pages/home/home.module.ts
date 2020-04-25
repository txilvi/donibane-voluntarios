import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '@shared/shared.module';
import { CustomHeaderModule } from '@components/custom-header/custom-header.module';
import { FooterModule } from '@components/footer/footer.module';
import { HomePage } from '@pages/home/home';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    CustomHeaderModule,
    FooterModule,
    SharedModule
  ],
})
export class HomeModule {}

