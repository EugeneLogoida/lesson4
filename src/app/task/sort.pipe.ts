import { Pipe, PipeTransform } from '@angular/core';
import { List } from './task.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: List[], sort: string): List[] {
    if(!value) return [];
    if(!sort) return value;

    
    if(sort === 'fnu') return value.sort((a,b) => (a.firstName > b.firstName) ? 1: ((a.firstName < b.firstName)? -1 : 0));
    if(sort === 'fnd') return value.sort((a,b) => (a.firstName < b.firstName) ? 1: ((a.firstName> b.firstName)? -1 : 0));
    if(sort === 'lnu') return value.sort((a,b) => (a.lastName > b.lastName) ? 1: ((a.lastName < b.lastName)? -1 : 0));
    if(sort === 'lnd') return value.sort((a,b) => (a.lastName < b.lastName) ? 1: ((a.lastName> b.lastName)? -1 : 0));
    if(sort === 'pnu') return value.sort((a,b) => (a.phoneNumber > b.phoneNumber) ? 1: ((a.phoneNumber < b.phoneNumber)? -1 : 0));
    if(sort === 'pnd') return value.sort((a,b) => (a.phoneNumber < b.phoneNumber) ? 1: ((a.phoneNumber> b.phoneNumber)? -1 : 0));
    return value;
  }

}
