export class Correo {
  constructor(
    public nombre: string = null, 
    public telefono: number = null, 
    public email: string = null, 
    public direccion: string = null,
    public tokenCaptcha: string = null,
    public quenecesitas: string = null,
    public tipoSolicitud: string = null)
  {
  }
}

