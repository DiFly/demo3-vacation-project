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
    this.requestVacation.controls.vacationDataFrom.setValue(Date.now().toString().substring(0, 10));
  }

  sendRequestVacation() {
    alert('Click button: REQUEST VACATION');
  }

  clickCancel() {
    this.requestVacation.reset();
    alert('Click CANCEL button');
  }
}
