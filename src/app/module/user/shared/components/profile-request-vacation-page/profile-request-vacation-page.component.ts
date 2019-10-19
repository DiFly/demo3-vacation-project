import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-request-vacation-page',
  templateUrl: './profile-request-vacation-page.component.html',
  styleUrls: ['./profile-request-vacation-page.component.scss']
})
export class ProfileRequestVacationPageComponent implements OnInit {
  requestVacation: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  sendRequestVacation() {
    alert('Click button: REQUEST VACATION');
  }
}
