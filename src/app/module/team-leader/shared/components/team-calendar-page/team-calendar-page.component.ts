import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-team-calendar',
  templateUrl: './team-calendar-page.component.html',
  styleUrls: ['./team-calendar-page.component.scss']
})
export class TeamCalendarPageComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];

  constructor() { }

  ngOnInit() {
  }

}
