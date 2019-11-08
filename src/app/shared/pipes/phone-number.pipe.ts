import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phone: string, ...args: any[]): any {
    if (!phone) {
      return 'No phone number';
    }

    if (phone.length === 9 || phone.length === 10) {
      return (
        phone.slice(0, 3) + ' ' +
        phone.slice(3, 6) + ' ' +
        phone.slice(6, 8) + ' ' +
        phone.slice(8)
      );
    } else {
      return (
        phone.slice(0, 4) + ' ' +
        phone.slice(4, 6) + ' ' +
        phone.slice(6, 9) + ' ' +
        phone.slice(9, 11) + ' ' +
        phone.slice(11)
      );
    }
  }
}
