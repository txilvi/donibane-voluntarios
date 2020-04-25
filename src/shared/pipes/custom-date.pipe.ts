import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {

  transform(value: string, format: string) {

    if (value != null) {
      let datePipe = new DatePipe('es');
      if (format == 'long') {
        value = datePipe.transform(value, 'yMMMMEEEEd');
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      else if (format == 'long hour') {
        value = datePipe.transform(value, 'd/MM/yyyy, jm');
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      else if (format == 'short') {
        value = datePipe.transform(value, 'jm') + 'h';
      }
      else {
        value = datePipe.transform(value, 'jm') + 'h - ' + datePipe.transform(value, 'd/MM/yyyy');
      }
    } else {
      value = '';
    }

    return value;

  }
}
