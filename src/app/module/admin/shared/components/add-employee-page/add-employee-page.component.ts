import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EmployeeModel} from '../../../../../shared/models/employee-model';
import {EmployeeService} from '../../../../../shared/services/employee.service';
import {TeamModel} from '../../../../../shared/models/team-model';

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.scss']
})
export class AddEmployeePageComponent implements OnInit {
  editForm: FormGroup;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      vacationType: new FormControl(),
      firstName: new FormControl(),
      surname: new FormControl(),
      // avatar?: new FormControl(),
      birthdate: new FormControl(),
      jobTitle: new FormControl(),
      workEmail: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      skype: new FormControl(),
      workStartDate: new FormControl(),
      workEndDate: new FormControl(),
      // deleted: new FormControl(),
      balance: new FormControl(),
      teamId: new FormControl(),
      teams: new FormControl(),
      // vacationDataFrom: new FormControl(),
      // vacationDataTo: new FormControl()
    });
    this.editForm.controls.vacationType.setValue('0', {onlySelf: true});
    this.editForm.controls.jobTitle.setValue('0', {onlySelf: true});

    const date = new Date(new Date().valueOf() + 86_400_000);
    this.editForm.controls.workStartDate.setValue(date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear());
  }

  cancel() {
    console.log('click cancel');
  }

  saveNewUser() {
    console.log('click Done ', this.editForm.getRawValue());
    let employee: EmployeeModel;
    employee = {
      firstName: this.editForm.value.firstName,
      surname: this.editForm.value.surname,
      // avatar?: new FormControl(),
      birthdate: this.changeToDate(this.editForm.value.birthdate),
      jobTitle: this.editForm.value.jobTitle,
      workEmail: this.editForm.value.workEmail,
      email: this.editForm.value.email,
      phone: this.editForm.value.phone.replace(' ', ''),
      skype: this.editForm.value.skype,
      workStartDate: this.changeToDate(this.editForm.value.workStartDate),
      workEndDate: this.changeToDate(this.editForm.value.workEndDate),
      balance: this.editForm.value.balance,

      // vacationType: new FormControl(),
      // deleted: new FormControl(),
      // teamId: new FormControl(),
      // teams: new FormControl(),
    } as EmployeeModel;

    this.employeeService.postEmployee(employee).subscribe(data => console.log(data));
  }

  private changeToDate(value: string): Date {
    const ourDate = value.split('/').map( n => +(n.trim()));
    function notNaN(array: any[]): boolean {
      for (const t of array) {
        if (isNaN(t)) {
          return false;
        }
      }
      return true;
    }
    if (notNaN(ourDate) && ourDate.length === 3) {
      return new Date(ourDate[2], (ourDate[1] - 1), ourDate[0]);
    } else {
      return null;
    }
  }
}
