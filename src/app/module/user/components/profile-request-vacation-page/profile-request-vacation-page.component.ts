import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {EmployeeService} from '../../../../shared/services/employee.service';
import {EmployeeModel} from '../../../../shared/models/employee-model';
import {VacationService} from '../../../../shared/services/vacation.service';

@Component({
  selector: 'app-profile-request-vacation-page',
  templateUrl: './profile-request-vacation-page.component.html',
  styleUrls: ['./profile-request-vacation-page.component.scss']
})
export class ProfileRequestVacationPageComponent implements OnInit {
  currentUser: EmployeeModel;
  requestVacation: FormGroup;

  constructor(
    private userService: EmployeeService,
    private vacationService: VacationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.user$.subscribe( user => {
      this.currentUser = user;
      console.log('profile-request-vacation-page onInit', this.currentUser);
    });

    this.requestVacation = new FormGroup({
      vacationType: new FormControl(), // ToDO what the type view on page?
      comment: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl()
    });
    this.requestVacation.controls.vacationType.setValue('0', {onlySelf: true});
    const date = new Date(new Date().valueOf() + 86_400_000);
    this.requestVacation.controls.startDate.setValue(date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear());
  }

  sendRequestVacation() {
    alert('Click button: REQUEST VACATION');
    console.log(this.requestVacation.getRawValue());
    const startDate = this.changeToDate(this.requestVacation.getRawValue().startDate);
    const endDate = new Date(this.requestVacation.getRawValue().endDate);

    // ToDo Not work,
    this.vacationService.postCreateVacation(
      this.currentUser.id, startDate, endDate, this.requestVacation.getRawValue().comment, this.currentUser).subscribe();
    this.requestVacation.reset();
  }

  clickCancel() {
    this.requestVacation.reset();
    console.log('Click CANCEL button');
    this.router.navigate(['/profile']);
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
