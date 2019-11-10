import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {CalendarService} from '../../service/calendar.service';
// import timeGrid from '@fullcalendar';

@Component({
  selector: 'app-team-calendar',
  templateUrl: './team-calendar-page.component.html',
  styleUrls: ['./team-calendar-page.component.scss']
})
export class TeamCalendarPageComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  calendarEvents = [];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.calendarService.getData().subscribe(
      data => {
        this.calendarEvents = data;
      }

    );

  }

}
