import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import {VacationService} from './services/vacation.service';
import { AmountOfDaysPipe } from './pipes/amount-of-days.pipe';


@NgModule({
  declarations: [PhoneNumberPipe, AmountOfDaysPipe],
  exports: [
    PhoneNumberPipe,
    AmountOfDaysPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    VacationService
  ]
})
export class SharedModule { }
