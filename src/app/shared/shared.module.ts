import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import {VacationService} from './services/vacation.service';


@NgModule({
  declarations: [PhoneNumberPipe],
  exports: [
    PhoneNumberPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
