import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountDate'
})
export class AmountDatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    console.log(value, args);
    if (value === undefined || args.length === 0) {
      return null;
    }
    const from = value.split('/').map( n => +(n.trim()));
    const to = args[0].split('/').map( n => +(n.trim()));
    console.log(from, ' ', to);

    function notNaN(array: any[]): boolean {
        const verify = array.reduce((sum, current) => {
          if (isNaN(current)) { return false; }
        }, true);
        return verify;
    }

    if (notNaN(from) || notNaN(to)) {
      return 'text';
    }
    return 'number';
  }

}
