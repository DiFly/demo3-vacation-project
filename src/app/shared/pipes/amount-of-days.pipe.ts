import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountOfDays'
})
export class AmountOfDaysPipe implements PipeTransform {

  transform(from: any, to: any): string {
    const  fromDate = new Date(from);
    const toDate = new Date(to);
    const difference =  Math.abs(toDate.getDate() - fromDate.getDate());
    return difference.toString();
  }

}
