import { Directive, Renderer2, ElementRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';


@Directive({ selector: '[transition-page]' })

export class TransitionPageDirective {

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2,
    private router: Router
  ) {
    this.configure();
  }

  private configure() {
    const element = this.elementRef.nativeElement;
    this.router.events.subscribe(
      val => {
        if (val instanceof NavigationStart) {
          this.render.addClass(element, 'fadeIn');
          setTimeout(() => {
            this.render.removeClass(element, 'fadeIn');
          }, 350);
        }
      }
    );

  }

}
