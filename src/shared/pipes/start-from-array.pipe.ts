import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startFromArray'
})

//https://hassantariqblog.wordpress.com/2017/03/16/angular2-creating-custom-search-filter-pipe-for-ngfor-directive/

@Injectable()
export class StartFromArrayPipe implements PipeTransform {
  transform(items: any[], start: number, limit: number): any[] {
    if (!items || !items.length) { return; }
    start = +start;
    let filteredItems = items.slice(start, start + limit);
    return filteredItems;
  }
}
