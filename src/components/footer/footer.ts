import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NavController } from 'ionic-angular';
import { BreakpointProvider } from '@shared/providers/breakpoint.provider';


@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent implements OnInit {

  @Input() interior: boolean = false;

  private subscriptions: Subscription = new Subscription();
  isXS: boolean = false;

  constructor(
    private navCtrl: NavController,
    private breakpointService: BreakpointProvider
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.breakpointService.isXS$.subscribe((isXS: boolean) => {
        this.isXS = isXS;
      })
    );
  }

  goPage(page: string) {
    const activePage = this.navCtrl.getActive();
    if (activePage.component && activePage.component.name
      && page == activePage.component.name) {
      return;
    }
    this.navCtrl.push(page, null, {animate: false});
  }

  goTwitter() {
    window.open('https://twitter.com/salud_na', '_blank');
  }

  goFacebook() {
    window.open('https://es-la.facebook.com/SaludNavarra/', '_blank');
  }

  goYoutube() {
    window.open('https://www.youtube.com/SaludNavarra', '_blank');
  } 
  goNavarra() {
    window.open('https://www.navarra.es', '_blank');
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
