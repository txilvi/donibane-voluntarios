import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { SharedModule } from '@shared/shared.module';
import { CustomHeaderModule } from '@components/custom-header/custom-header.module';
import { ImageGalleryComponentModule } from '@components/image-gallery/image-gallery.module';
import { FooterModule } from '@components/footer/footer.module';
import { ContactoPage } from './contacto';


@NgModule({
  declarations: [
    ContactoPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactoPage),
    RecaptchaModule,
    RecaptchaFormsModule,
    CustomHeaderModule,
    ImageGalleryComponentModule,
    FooterModule,
    SharedModule
  ],
})
export class ContactoModule {}

