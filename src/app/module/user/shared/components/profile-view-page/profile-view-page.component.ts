import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../shared/models/user-model';
import {AvailableDaysService} from '../../services/available-days.service';
import {AvailableDays} from '../../models/available-days.model';

@Component({
  selector: 'app-profile-view-page',
  templateUrl: './profile-view-page.component.html',
  styleUrls: ['./profile-view-page.component.scss']
})
export class ProfileViewPageComponent implements OnInit {
  available: AvailableDays;

  constructor(
    private daysService: AvailableDaysService
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
  }

}
