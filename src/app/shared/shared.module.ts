import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserPositionPipe } from './pipes/user-position.pipe';


@NgModule({
  declarations: [UserPositionPipe],
  exports: [
    UserPositionPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
