import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'keepHtml',
  pure: false
})
export class EscapeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(content: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
