import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ImageGalleryComponent } from './image-gallery';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    ImageGalleryComponent,
  ],
  imports: [
    IonicModule,
    IonicImageViewerModule
  ],
  exports: [
    ImageGalleryComponent
  ]
})
export class ImageGalleryComponentModule {}
