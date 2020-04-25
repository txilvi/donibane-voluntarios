
export class GlobalData {
  email: string;
  //Estados 0:no necesita cambiar, 1:necesita cambiar, 2:cambiada, -1:ocultar vista
  cambioPass: number;
  condiciones: number;
  appLocked: boolean;
  login: boolean;
  fechaUltimoLoginExitoso: number;
  actualizaciones: any;
  nombre: string;
  apellidos: string;
  isIOS: boolean;

  getUser(): string {
    return this.nombre + ' ' + this.apellidos;
  }

  constructor() {
    this.isIOS = false;
  }
}

