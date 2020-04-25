import { Utils } from '@shared/utils/utils';

export class Actividad {
  $key: any;
  id: number;
  nombre: string;
  nombreLargo: string;
  descripcion: string;
  puntos: ActividadPunto[];
  puntosNivel: number;
  icono: string;
  imagen: string;
  porcentaje: number;
  puntosTotales: number;
}

export class ActividadPunto {
  id: number;
  descripcion: string;
  icono: string;
  puntos: number;
}

export class ActividadRealizada {
  fecha: number;
  constructor(public actividadPunto: ActividadPunto, public actividad: Actividad, public puntosAcumulados, public porcentaje: number)
  {
    if (!actividad || !actividadPunto){
      return;
    }
    this.fecha = Utils.getFechaActual();
  }
}
