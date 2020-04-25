import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { I18nService } from '@core/i18n/i18n.service';

@Pipe({
  name: 'search'
})

//https://hassantariqblog.wordpress.com/2017/03/16/angular2-creating-custom-search-filter-pipe-for-ngfor-directive/

@Injectable()
export class SearchPipe implements PipeTransform {
  constructor(private i18nService: I18nService) {
  }

  transform(items: any[], field: string, value: string, defaultValue: string): any[] {
    if (!items) return [];
    if (value === this.i18nService.instant(defaultValue)) return items;
    return items.filter(it => it[field] !== undefined && it[field].toLowerCase().includes(value.toLowerCase()));
  }
}
