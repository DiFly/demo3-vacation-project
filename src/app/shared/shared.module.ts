import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserPositionPipe } from './pipes/user-position.pipe';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';


@NgModule({
  declarations: [UserPositionPipe, PhoneNumberPipe],
  exports: [
    UserPositionPipe,
    PhoneNumberPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
