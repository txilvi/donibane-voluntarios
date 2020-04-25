import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeFinalSpaces',
  pure: false
})
export class RemoveFinalSpacesPipe implements PipeTransform {

  transform(value: string): string {
    if (!(typeof value === 'string')) {
      return value;
    }
    return value.trim();
  }
}
