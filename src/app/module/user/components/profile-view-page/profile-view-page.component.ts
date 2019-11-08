import {Component, OnInit} from '@angular/core';

import {Vacation} from '../../../../shared/models/vacation-model';
import {EmployeeModel} from '../../../../shared/models/employee-model';
import {EmployeeService} from '../../../../shared/services/employee.service';
import {VacationService} from '../../../../shared/services/vacation.service';

@Component({
  selector: 'app-profile-view-page',
  templateUrl: './profile-view-page.component.html',
  styleUrls: ['./profile-view-page.component.scss']
})
export class ProfileViewPageComponent implements OnInit {
  currentUser: EmployeeModel;
  vacations: Vacation[];

  constructor(
    private userService: EmployeeService,
    private vacationService: VacationService,
  ) {}

  ngOnInit() {
    this.userService.user$.subscribe( user => {
      this.currentUser = user;
      console.log('header-layout onInit', this.currentUser);
    });

    this.vacationService.getAllVacationByUserId(this.currentUser.id).subscribe(
      data => {
        console.log('getAllVacationByUserId: ', data);
        this.vacations = data;
      }
    );
  }

}
