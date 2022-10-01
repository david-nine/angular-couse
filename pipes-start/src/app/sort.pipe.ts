import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], propName: string): any {
    if (value.length === 0) {
      return value;
    }

    return value.sort((item1, item2) => item1[propName] < item2[propName] ? 1 : -1).reverse();
  }

}
