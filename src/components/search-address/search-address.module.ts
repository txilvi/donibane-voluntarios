import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchAddressComponent } from './search-address';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    SearchAddressComponent,
  ],
  imports: [
    IonicModule,
    SharedModule
  ],
  exports: [
    SearchAddressComponent
  ]
})
export class SearchAddressModule {}

