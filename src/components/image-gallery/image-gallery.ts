import { Component, Input } from '@angular/core';
import { Imagen, eTipoImagen } from './image-gallery.model';
import { BreakpointProvider } from '@shared/providers/breakpoint.provider';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'image-gallery',
  templateUrl: 'image-gallery.html'
})
export class ImageGalleryComponent {

  @Input() images: Imagen[] = [];
  @Input() slidesPerView: number = 1;
  @Input() direction: string = 'horizontal';

  imagesNormalizadas: Imagen[] = [];
  isXS: boolean = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private breakpointService: BreakpointProvider
  ) { }

  ngOnInit() {
    this.setImagenes();
    this.subscriptions.add(
      this.breakpointService.isXS$.subscribe((isXS: boolean) => {
        this.isXS = isXS;
        this.slidesPerView = 2;
        this.direction = 'vertical';
      })
    );
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
          img.thumbnail = thumbnails[0].ruta;
        }
      });
    }
  }


}
