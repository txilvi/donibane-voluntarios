import { Excursion } from '@providers/excursiones/excursiones.model';
import { extract } from '@core/i18n/i18n.service';
import { Utils } from '@shared/utils/utils';
import { SocialProvider } from '@shared/providers/social.provider';
import { Injectable } from '@angular/core';

@Injectable()
export class MapaHelper {

    constructor(private socialProvider: SocialProvider){

    }

    createInfoWindowExcursion(excursion: Excursion) {
        let dist = '';
        if (excursion.distanciaUsuario) {
            let desdeTuUbicacion = extract('km desde tu ubicación');
            dist = '<div class="map-subtitle map-distancia">' + '(' + excursion.distanciaUsuario + ' ' + desdeTuUbicacion + ' )' + '</div>';
        }

        //Principal element
        let principalElement = document.createElement('div');
        principalElement.className = 'map-infoWindow';

        //Row nombre y dist
        let nombreDist = '<div class="map-title map-nombre">' + excursion.name + '</div>' + dist;
        let nombreDistElement = document.createElement('div');
        nombreDistElement.className = 'map-heading';
        nombreDistElement.innerHTML = nombreDist;
        principalElement.appendChild(nombreDistElement);

        //Direccion
        let direccion = excursion.extendedData.data.find(d => d.name == 'direccion');
        if (direccion && direccion.value.trim() != '') {
            let dir = '<div class="map-label"> Dirección </div>' + '<div class="map-value map-direccion">' + Utils.htmlDecode(direccion.value) + '</div>';
            let dirElement = document.createElement('div');
            dirElement.className = 'map-row';
            dirElement.innerHTML = dir;
            principalElement.appendChild(dirElement);
        }

        //Descripción
        let descripcion = excursion.extendedData.data.find(d => d.name == 'descripcion');
        if (descripcion && descripcion.value.trim() != '') {
            let dir = '<div class="map-label"> Descripción </div>' + '<div class="map-value map-direccion">' + Utils.htmlDecode(descripcion.value) + '</div>';
            let dirElement = document.createElement('div');
            dirElement.className = 'map-row';
            dirElement.innerHTML = dir;
            principalElement.appendChild(dirElement);
        }

        //Botones
        let botElement = document.createElement('div');
        botElement.className = 'map-row';

        //Boton compartir
        let buttonCompartir = document.createElement('div');
        buttonCompartir.className = 'map-button-share';
        buttonCompartir.innerHTML = '<div class="card-secondary-button rounded-icon"> ' + '<div class="map-share icon"> </div><span class="text">Compartir</span> ' + '</div>';
        buttonCompartir.addEventListener('click', () => {
            this.socialProvider.regularShare('Cukis me voy de excursión a ' + excursion.name);
        });

        //Boton como llegar
        let buttonComollegar = document.createElement('button');
        buttonComollegar.className = 'map-button-llegar button button-md button-default button-default-md button-md-light';
        buttonComollegar.innerHTML = '<span class="button-inner"> ' + '<div class="icon map-pin"> </div>&nbsp;Cómo llegar' + '</span>';
        buttonComollegar.addEventListener('click', () => {
            console.log('buttonComollegar');
        });

        botElement.appendChild(buttonCompartir);
        botElement.appendChild(buttonComollegar);

        principalElement.appendChild(botElement);


        return principalElement;
    }
}
