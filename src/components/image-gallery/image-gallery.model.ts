export enum eTipoImagen {
    Normalizada = '1', 
    Thumbnail = '2'
}

export class Imagen {
    id: number;
    imagen: string;
    tipo: eTipoImagen;
    thumbnail: string; 
}
