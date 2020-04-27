import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { I18nService } from '@core/i18n/i18n.service';
import { Subscription } from 'rxjs/Subscription';
import { BreakpointProvider } from '@shared/providers/breakpoint.provider';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomHeaderComponent {

  @Input() title: string = 'Cuida tus vecinos';

  nuevasSecciones: boolean;
  langSelected: string = 'es';
  isXS: boolean = false;
  private subscriptions: Subscription = new Subscription();
  
  constructor(
    private i18nService: I18nService, 
    private navCtrl: NavController,
    private breakpointService: BreakpointProvider) { }

  ngOnInit() {
    this.langSelected = this.i18nService.getCurrentLanguage();
    this.subscriptions.add(
      this.breakpointService.isXS$.subscribe((isXS: boolean) => {
        this.isXS = isXS;
      })
    );
  }

  changeLang(lang: string) {
    this.i18nService.setLanguage(lang);
    this.langSelected = lang;
  }

  openPage(page) {
    this.navCtrl.setRoot(page, null, {animate: false});
  }

}

