import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[decimalsInput]'
})
export class DecimalsInputDirective {

  decimalSeparator = '.';

  @HostListener('blur', ['$event']) onblur(event) {
    let value = event.target.value;

    //Cambio coma por punto
    let format = value.replace(',', this.decimalSeparator);

    //Redondeo
    let round = Math.round(format);

    event.target.value = round;

  }


}
