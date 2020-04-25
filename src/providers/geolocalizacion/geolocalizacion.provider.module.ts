import { NgModule } from '@angular/core';

import { IMapaProvider } from '@providers/geolocalizacion/mapa.provider.interface';
import { IGeoProvider } from '@providers/geolocalizacion/geo.provider.interface';
import { GeoProvider } from '@providers/geolocalizacion/geo.provider';
import { IAddressSuggestionsProvider } from '@providers/geolocalizacion/address-suggestions.interface';
import { AddressSuggestionsProvider } from '@providers/geolocalizacion/address-suggestions.provider';
import { MapaHelper } from '@providers/geolocalizacion/mapa.helper';
import { MapaProviderFake } from '@providers/geolocalizacion/mapa.provider.fake';


@NgModule({
  providers: [
    { provide: IMapaProvider, useClass: MapaProviderFake },
    //Necesario hacer fake porque no podemos acceder a Internet desde el móvil de pruebas 
    { provide: IAddressSuggestionsProvider, useClass: AddressSuggestionsProvider },
    { provide: IGeoProvider, useClass: GeoProvider },
    { provide: MapaHelper, useClass: MapaHelper }
  ]
})
export class GeoLocalizacionProviderModule {}
