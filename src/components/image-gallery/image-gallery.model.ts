export enum eTipoImagen {
    Normalizada = '1', 
    Thumbnail = '2'
}

export class Imagen {
    id: number;
    ruta: string;
    tipo: eTipoImagen;
    thumbnail: string; 
}
