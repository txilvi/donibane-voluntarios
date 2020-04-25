import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';

import { I18nService } from '@core/i18n/i18n.service';


@Directive({
  selector: '[ngRetina]',
  providers: [HttpModule]
})

export class NgRetina {
  @Input('ngRetina') imgUrl: string;
  @Input() language: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private http: Http,
    private i18nService: I18nService,
    private translateService: TranslateService
  ) {
    this.translateService.onLangChange.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    if (this.language) {
      this.addLanguagePath();
    }

    if (this._isRetina()) {
      // check for retina image
      this._checkRetinaImage('@2x')
        .then(() => {
          let retinaUrl = this._getRetinaUrl(this.imgUrl, '@2x');
          this.renderer.setAttribute(this.el.nativeElement, 'src', retinaUrl);
        })
        .catch(() => {
          this.renderer.setAttribute(this.el.nativeElement, 'src', this.imgUrl);
        });
    } else {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.imgUrl);
    }
  }

  private _checkRetinaImage(infix: string): any {
    let retinaUrl = this._getRetinaUrl(this.imgUrl, infix);
    return this.http.get(retinaUrl).toPromise();
  }

  private _isRetina(): boolean {
    let mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), ' +
      '(min--moz-device-pixel-ratio: 1.5), ' +
      '(-o-min-device-pixel-ratio: 3/2), ' +
      '(min-resolution: 1.5dppx)';
    if (window.devicePixelRatio > 1) {
      return true;
    }
    return (window.matchMedia && window.matchMedia(mediaQuery).matches);
  }

  private _getRetinaUrl(url: string, infix: string): string {
    let pathParts = url.split('/');
    let file = pathParts.pop();
    let fileParts = file.split('.');

    if (fileParts.length < 2)
      return url + infix;

    fileParts[fileParts.length - 2] += infix;
    pathParts.push(fileParts.join('.'));

    return pathParts.join('/');
  }

  private addLanguagePath() {

    let sepUrlEs = this.imgUrl.split('_es');
    let sepUrlEu = this.imgUrl.split('_eu');
    let url = this.imgUrl;

    if (sepUrlEs.length > 1) {
      url = sepUrlEs[sepUrlEs.length - 2] + sepUrlEs[sepUrlEs.length - 1];
    } else if (sepUrlEu.length > 1) {
      url = sepUrlEu[sepUrlEu.length - 2] + sepUrlEu[sepUrlEu.length - 1];
    }

    let sepUrl = url.split('.');
    if (sepUrl.length > 2) {
      this.imgUrl = '.' + sepUrl[sepUrl.length - 2] + '_' + this.i18nService.getCurrentLanguage() + '.' + sepUrl[sepUrl.length - 1];
    }

  }
}
