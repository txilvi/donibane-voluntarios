import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

declare const window;

@Directive({
  selector: '[fixedNav]'
})

export class FixedNavDirective {

  readonly scrollYNav: number = 92;
  private element: any;
  private mainContent: any;
  //private origOffsetY: number;

  @HostListener('window:scroll', ['$event']) onScroll(_$event: Event) {
    this.adjustNav();
  }

  @HostListener('window:touchmove', ['$event']) onTouchMove(_$event: Event) {
    this.adjustNav();
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.element = this.elementRef.nativeElement;
    this.mainContent = window.document.querySelector('.main-content');
  }

  ngOnDestroy() {
    this.removeFixedNav();
  }

  private adjustNav() {
    if (!this.mainContent)
      this.mainContent = window.document.querySelector('.main-content');
    if (window.scrollY >= this.scrollYNav) {
      this.renderer.addClass(this.mainContent, 'menu-margin');
      this.renderer.addClass(this.element, 'sticky');
    } else {
      this.removeFixedNav();
    }
  }

  private removeFixedNav() {
    this.renderer.removeClass(this.mainContent, 'menu-margin');
    this.renderer.removeClass(this.element, 'sticky');
  }

}
