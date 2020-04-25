export class Localizacion {
  constructor(public latitud: number, public longitud: number) {
  }
}

export class Marcador {
  constructor(public latitud: number, public longitud: number, public icon: string, public contenido: HTMLDivElement ) {
  }
}
export class SugerenciaDireccion {
  constructor(id: string, nombreCompleto: string, lugarPrincipal: string, lugarSecundario: string) {
    this.id = id;
    this.nombreCompleto = nombreCompleto;
    this.lugarPrincipal = lugarPrincipal;
    this.lugarSecundario = lugarSecundario;
  }
  id: string;
  nombreCompleto: string;
  lugarPrincipal: string;
  lugarSecundario: string;
  localizacion: Localizacion;
}

export class Direccion {
  constructor(calle: string, localidad: string) {
    this.calle = calle;
    this.localidad = localidad;
  }
  localidad: string;
  calle: string;
}
