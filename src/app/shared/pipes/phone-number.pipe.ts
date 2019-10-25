import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phone: string, ...args: any[]): any {
    return (
      phone.slice(0, 4) + ' ' +
      phone.slice(4, 6) + ' ' +
      phone.slice(6, 9) + ' ' +
      phone.slice(9, 11) + ' ' +
      phone.slice(11)
    );
  }

}
