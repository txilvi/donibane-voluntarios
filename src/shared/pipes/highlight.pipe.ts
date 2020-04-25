import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})


@Injectable()
export class HighlightPipe implements PipeTransform {
  transform(data: string, highlightText: string, option: string = 'Single-Match', caseSensitive: boolean = false, highlightStyleName: string = 'search-highlight'): SafeHtml {
    if (highlightText && data && option) {
      let regex: any = '';
      let caseFlag: string = !caseSensitive ? 'i' : '';
      switch (option) {
        case 'Single-Match': {
          regex = new RegExp(highlightText, caseFlag);
          break;
        }
        case 'Single-And-StartsWith-Match': {
          regex = new RegExp('^' + highlightText, caseFlag);
          break;
        }
        case 'Multi-Match': {
          regex = new RegExp(highlightText, 'g' + caseFlag);
          break;
        }
        default: {
          // default will be a global case-insensitive match
          regex = new RegExp(highlightText, 'gi');
        }
      }
      data = data.replace(regex, (match) => `<span class="${highlightStyleName}">${match}</span>`);
      if (data.indexOf('</span> ') != -1){
        data = data.replace('</span> ', '</span>&nbsp;');
      }
      if (data.indexOf(' <span') != -1) {
        data = data.replace(' <span', '&nbsp;<span');
      }
    } 
    return data;
  }
}
