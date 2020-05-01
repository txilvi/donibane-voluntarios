import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '@shared/shared.module';
import { CustomHeaderModule } from '@components/custom-header/custom-header.module';
import { ImageGalleryComponentModule } from '@components/image-gallery/image-gallery.module';
import { FooterModule } from '@components/footer/footer.module';
import { AyudaPage } from './ayuda';


@NgModule({
  declarations: [
    AyudaPage,
  ],
  imports: [
    IonicPageModule.forChild(AyudaPage),
    CustomHeaderModule,
    ImageGalleryComponentModule,
    FooterModule,
    SharedModule
  ],
})
export class AyudaModule {}

