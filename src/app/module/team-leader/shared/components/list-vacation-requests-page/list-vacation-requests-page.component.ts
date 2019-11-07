import { Component, OnInit } from '@angular/core';
import {VacationService} from '../../../../../shared/services/vacation.service';
import {Vacation} from '../../../../../shared/models/vacation-model';

@Component({
  selector: 'app-list-vacation-requests',
  templateUrl: './list-vacation-requests-page.component.html',
  styleUrls: ['./list-vacation-requests-page.component.scss']
})
export class ListVacationRequestsPageComponent implements OnInit {
  vacations: Vacation[];

  constructor(
    private vacationService: VacationService
  ) { }

  ngOnInit() {
    this.vacationService.getAllVacation().subscribe( data => {
        this.vacations = data;
        console.log(data);
      }
    );
  }

}
