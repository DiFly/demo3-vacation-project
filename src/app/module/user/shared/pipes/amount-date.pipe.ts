import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountDate'
})
export class AmountDatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value === undefined || args.length === 0) {
      return null;
    }
    const from = value.split('/').map( n => +(n.trim()));
    const to = args[0].split('/').map( n => +(n.trim()));

    function notNaN(array: any[]): boolean {
      for (const t of array) {
        if (isNaN(t)) {
          return false;
        }
      }
      return true;
    }
    // console.log(from, ' : ' , notNaN(from), ' | ', to, ' : ' , notNaN(to) );
    if (notNaN(from) && notNaN(to) && from.length === 3 && to.length === 3) {

      const dateFrom = new Date(from[2], (from[1] - 1), from[0]);
      const dateTo = new Date(to[2], (to[1] - 1), to[0]);
      const amountDay = (dateTo.valueOf() - dateFrom.valueOf()) / (86_400_000) + 1;
      // console.log(dateFrom.toDateString());
      // console.log(amountDay);

      if (amountDay < 0) {
        return '0';
      } else {
        return amountDay;
      }
    } else {
      return '0';
    }
  }

}
