import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-request-vacation-page',
  templateUrl: './profile-request-vacation-page.component.html',
  styleUrls: ['./profile-request-vacation-page.component.scss']
})
export class ProfileRequestVacationPageComponent implements OnInit {
  requestVacation: FormGroup;

  constructor() { }

  ngOnInit() {
    this.requestVacation = new FormGroup({
      vacationType: new FormControl(),
      vacationComment: new FormControl(),
      vacationDataFrom: new FormControl(),
      vacationDataTo: new FormControl()
    });
    this.requestVacation.controls.vacationType.setValue('0', {onlySelf: true});
    const date = new Date(new Date().valueOf() + 86_400_000);
    this.requestVacation.controls.vacationDataFrom.setValue(date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear());
  }

  sendRequestVacation() {
    alert('Click button: REQUEST VACATION');
    console.log(this.requestVacation.getRawValue());
  }

  clickCancel() {
    this.requestVacation.reset();
    alert('Click CANCEL button');
  }
}
