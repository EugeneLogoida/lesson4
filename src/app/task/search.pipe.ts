import { Pipe, PipeTransform } from '@angular/core';
import { List } from './task.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: List[], field: string): List[] {
    if(!value) return [];
    if(!field) return value;

    return value.filter((item) => {
      return item.firstName.toLowerCase().includes(field.toLowerCase()) || item.lastName.toLowerCase().includes(field.toLowerCase()) ||  item.phoneNumber.includes(field);
    });
  }

}
