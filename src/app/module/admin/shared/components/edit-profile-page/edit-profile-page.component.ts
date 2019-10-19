import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent implements OnInit {
  editForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.editForm = new FormGroup({
      vacationType: new FormControl(),
      // vacationDataFrom: new FormControl(),
      // vacationDataTo: new FormControl()
    });
    this.editForm.controls.vacationType.setValue('0', {onlySelf: true});
    // const date = new Date(new Date().valueOf() + 86_400_000);
    // this.editForm.controls.vacationDataFrom.setValue(date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear());
  }

  cancel() {
    this.editForm.reset();
  }

  sendRequestVacation() {
    alert('Click button SAVE CHANGES');
  }
}
