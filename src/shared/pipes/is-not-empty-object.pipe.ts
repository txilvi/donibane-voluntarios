import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNotEmptyObject',
  pure: false
})
export class IsNotEmptyObjectPipe implements PipeTransform {

  constructor() { }

  transform(obj: Object): boolean {
    return Object.keys(obj).length !== 0;
  }
}
