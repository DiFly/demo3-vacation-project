import {Component, OnInit} from '@angular/core';
import {AvailableDaysService} from '../../services/available-days.service';
import {AvailableDays} from '../../models/available-days.model';
import {VacationListOfSingleUserService} from '../../services/vacation-list-of-single-user.service';
import {Vacation} from '../../../../../shared/models/vacation-model';

@Component({
  selector: 'app-profile-view-page',
  templateUrl: './profile-view-page.component.html',
  styleUrls: ['./profile-view-page.component.scss']
})
export class ProfileViewPageComponent implements OnInit {
  available: AvailableDays;
  vacations: Vacation[];

  constructor(
    private daysService: AvailableDaysService,
    private vacationService: VacationListOfSingleUserService
  ) {
    this.available = {
      days: 0,
      userId: 0
    };
  }

  ngOnInit() {
    this.daysService.getAvailableDaysOfUser(10).subscribe(
      data => {
        this.available = data;
      }
    );

    this.vacationService.getVacations(10).subscribe(
      data => {
        this.vacations = data;
      }
    );
  }

}
