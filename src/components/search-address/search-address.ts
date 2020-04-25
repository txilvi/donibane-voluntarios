import { Component, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SugerenciaDireccion } from '@providers/geolocalizacion/geolocalizacion.model';
import { IAddressSuggestionsProvider } from '@providers/geolocalizacion/address-suggestions.interface';


@Component({
  selector: 'search-address',
  templateUrl: 'search-address.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchAddressComponent {

  @Output() busquedaRealizada = new EventEmitter<SugerenciaDireccion>();

  //Busqueda
  filtroBusqueda: string;
  autocompleteBusqueda: SugerenciaDireccion[] = [];
  mostrarSugerencias: boolean = true;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private addressSuggestionsProvider: IAddressSuggestionsProvider,
    private ref: ChangeDetectorRef) { }


  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  autocompleteAddress() {
    this.mostrarSugerencias = true;
    this.subscriptions.add(
      this.addressSuggestionsProvider.getAddressSugestions(this.filtroBusqueda).subscribe((sugerencias) => {
          this.autocompleteBusqueda = sugerencias;
          this.ref.markForCheck();
        }
      )
    );
  }

  searchDeaOnAddressClick(sugerencia: SugerenciaDireccion) {
    this.restaurarBusqueda();
    this.busquedaRealizada.emit(sugerencia);
  }

  private restaurarBusqueda() {
    this.mostrarSugerencias = false;
  }
}

