import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

declare const window;

@Directive({
  selector: '[fixedElement]'
})

export class FixedElementDirective {


  private element: any;

  @Input() offsetY;
  @Input() offsetX;

  @HostListener('window:scroll', ['$event']) onScroll(_$event: Event) {
    this.adjustElement();
  }

  @HostListener('window:touchmove', ['$event']) onTouchMove(_$event: Event) {
    this.adjustElement();
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.element = this.elementRef.nativeElement;
  }


  private adjustElement() {
    if (window.scrollY >= this.offsetY && !this.element.classList.contains('sticky')) {
      let offsetLeft = this.element.offsetLeft + parseInt(this.offsetX);
      this.renderer.addClass(this.element, 'sticky');
      this.renderer.setStyle(this.element, 'left', offsetLeft);
    } else if (window.scrollY < this.offsetY) {
      this.renderer.removeClass(this.element, 'sticky');
    }
  }
}
