import { Component, Input } from '@angular/core';
import { Imagen, eTipoImagen } from './image-gallery.model';


@Component({
  selector: 'image-gallery',
  templateUrl: 'image-gallery.html'
})
export class ImageGalleryComponent {

  @Input() images: Imagen[] = [];
  @Input() slidesPerView: number = 3;

  imagesNormalizadas: Imagen[] = [];

  constructor(
  ) { }

  ngOnInit() {
    this.setImagenes();
  }

  ngOnChanges() {
    this.setImagenes();
  }

  private setImagenes() {
    if (this.images) {
      this.imagesNormalizadas = this.images.filter(i => i.tipo == eTipoImagen.Normalizada);
      this.imagesNormalizadas.forEach(img => {
        let thumbnails = this.images.filter(i => i.tipo == eTipoImagen.Thumbnail && i.id == img.id);
        if (thumbnails && thumbnails.length > 0) {
          img.thumbnail = thumbnails[0].imagen;
        }
      });
    }
  }


}
