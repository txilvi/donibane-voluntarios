import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreSexo',
  pure: false
})
export class NombreSexoPipe implements PipeTransform {

  constructor() { }

  transform(value: string): string {
    if (!value || !value.length) { return; }
    if (value.trim().toLowerCase() == 'h') {
      return 'Hombre';
    }
    else if (value.trim().toLowerCase() == 'm') {
      return 'Mujer';
    }
    else {
      return '';
    }
  }
}
