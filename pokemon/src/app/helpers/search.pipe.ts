import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText: string): any {
    if(!searchText) return value;
    let results = [];
    value.forEach(item => {
      if(item.name.toLowerCase().includes(searchText)) {
        results.push(item)
      }
    });
    return results;
  }

}
