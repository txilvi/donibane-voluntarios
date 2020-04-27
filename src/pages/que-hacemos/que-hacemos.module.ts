import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '@shared/shared.module';
import { CustomHeaderModule } from '@components/custom-header/custom-header.module';
import { ImageGalleryComponentModule } from '@components/image-gallery/image-gallery.module';
import { FooterModule } from '@components/footer/footer.module';
import { QueHacemosPage } from './que-hacemos';


@NgModule({
  declarations: [
    QueHacemosPage,
  ],
  imports: [
    IonicPageModule.forChild(QueHacemosPage),
    CustomHeaderModule,
    ImageGalleryComponentModule,
    FooterModule,
    SharedModule
  ],
})
export class QueHacemosModule {}

