import {Component, OnInit} from '@angular/core';
import {AvailableDays} from '../../models/available-days.model';
import {VacationListOfSingleUserService} from '../../services/vacation-list-of-single-user.service';
import {Vacation} from '../../../../../shared/models/vacation-model';
import {EmployeeModel} from '../../../../../shared/models/employee-model';
import {UserService} from '../../../../../shared/services/user.service';

@Component({
  selector: 'app-profile-view-page',
  templateUrl: './profile-view-page.component.html',
  styleUrls: ['./profile-view-page.component.scss']
})
export class ProfileViewPageComponent implements OnInit {
  currentUser: EmployeeModel;

  // ToDo delete unused service
  available: AvailableDays;
  vacations: Vacation[];

  constructor(
    private userService: UserService,
    private vacationService: VacationListOfSingleUserService
  ) {
    this.available = {
      days: 0,
      userId: 0
    };
  }

  ngOnInit() {
    this.userService.user$.subscribe( user => {
      this.currentUser = user;
      console.log('header-layout onInit', this.currentUser);
    });

    this.vacationService.getVacations(10).subscribe(
      data => {
        this.vacations = data;
      }
    );
  }

}
