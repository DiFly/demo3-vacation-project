import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.scss']
})
export class AddEmployeePageComponent implements OnInit {
  editForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.editForm = new FormGroup({
      vacationType: new FormControl(),
      // vacationDataFrom: new FormControl(),
      // vacationDataTo: new FormControl()
    });
    this.editForm.controls.vacationType.setValue('0', {onlySelf: true});
  }

  cancel() {
  }

  saveNewUser() {
  }
}
