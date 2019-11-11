import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import {switchMap, tap} from 'rxjs/operators';

import {EmployeeModel} from '../../../../../shared/models/employee-model';
import {EmployeeService} from '../../../../../shared/services/employee.service';
import {TeamModel} from '../../../../../shared/models/team-model';
import {TeamService} from '../../../../../shared/services/team.service';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent implements OnInit, OnDestroy {
  user: EmployeeModel;
  editForm: FormGroup;

  users: EmployeeModel[];
  teams: TeamModel[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: EmployeeService,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      firstName: new FormControl(),
      surname: new FormControl(),
      // avatar?: new FormControl(),
      birthdate: new FormControl(),
      jobTitle: new FormControl(),
      isActive: new FormControl(),
      workEmail: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      skype: new FormControl(),
      workStartDate: new FormControl(),
      workEndDate: new FormControl(),
      balance: new FormControl(),
      teamId: new FormControl(),
      teams: new FormControl(),
    });

    this.route.paramMap.pipe(
      tap(params => console.log(params)),
      switchMap((params: ParamMap) => {
        if (params === null) {
          this.location.back();
        } else {
          return this.userService.getEmployeeById(params.get('id'));
        }
      }),
    ).subscribe(data => {
      console.log('after subscribe ', data);
      this.user = data;
      this.editForm.controls.firstName.setValue(this.user.firstName);
      this.editForm.controls.surname.setValue(this.user.surname);
      this.editForm.controls.birthdate.setValue(this.dateToString(this.user.birthdate));
      this.editForm.controls.jobTitle.setValue(this.user.jobTitle);
      this.editForm.controls.isActive.setValue(this.user.isActive);
      this.editForm.controls.workEmail.setValue(this.user.workEmail);
      this.editForm.controls.email.setValue(this.user.email);
      this.editForm.controls.phone.setValue(this.user.phone);
      this.editForm.controls.skype.setValue(this.user.skype);
      this.editForm.controls.workStartDate.setValue(this.dateToString(this.user.workStartDate));
      this.editForm.controls.workEndDate.setValue(this.dateToString(this.user.workEndDate));
      this.editForm.controls.balance.setValue(this.user.balance);
      this.editForm.controls.teamId.setValue(this.user.teamId);
    });
    this.userService.getEmployeeAll().subscribe(data => {
      this.users = data;
    });
    this.teamService.getTeamAll().subscribe(data => {
      this.teams = data;
    });

  }

  cancel() {
    this.editForm.reset();
    this.location.back();
  }

  sendRequestVacation() {
    console.log('Click button SAVE CHANGES');
    this.user.firstName = this.editForm.value.firstName;
    this.user.surname = this.editForm.value.surname;
    this.user.birthdate = this.stringToDate(this.editForm.value.birthdate);
    this.user.jobTitle = this.editForm.value.jobTitle;
    this.user.isActive = this.editForm.value.isActive;
    this.user.workEmail = this.editForm.value.workEmail;
    this.user.email = this.editForm.value.email;
    this.user.phone = this.editForm.value.phone;
    this.user.skype = this.editForm.value.skype;
    this.user.workStartDate = this.stringToDate(this.editForm.value.workStartDate);
    this.user.workEndDate = this.stringToDate(this.editForm.value.workEndDate);
    this.user.balance = this.editForm.value.balance;
    this.user.teamId = this.editForm.value.teamId;

    console.log(this.user);
    this.userService.putEmployee(this.user).subscribe(data => console.log(data));
  }

  private stringToDate(value: string): Date {
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

  private dateToString(d: any): string {
    const date = new Date(d);
    if (date === null) {
      return '';
    } else {
      return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    }
  }

  ngOnDestroy(): void { }
}
