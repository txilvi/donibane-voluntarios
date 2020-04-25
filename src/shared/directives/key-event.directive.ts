import { Directive, HostListener, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[keyEvent]'
})
export class KeyEventDirective {

  @Output() enterKey: EventEmitter<any> = new EventEmitter();

  private keyEnter: number = 13;

  constructor() { }

  @HostListener('keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
      this.checkKey(event);
    }

  private checkKey(event) {    
    if (event.keyCode == this.keyEnter) {
      event.preventDefault();
      this.enterKey.emit();
    }
  }
}
