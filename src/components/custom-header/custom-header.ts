import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { I18nService } from '@core/i18n/i18n.service';

@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomHeaderComponent {

  @Input() title: string = 'Cuida tus vecinos';

  nuevasSecciones: boolean;
  langSelected: string = 'es';
  
  constructor(private i18nService: I18nService) { }

  ngOnInit() {
    this.langSelected = this.i18nService.getCurrentLanguage();
  }

  changeLang(lang: string) {
    this.i18nService.setLanguage(lang);
    this.langSelected = lang;
  }

}

