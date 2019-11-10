import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGrid from '@fullcalendar';

@Component({
  selector: 'app-team-calendar',
  templateUrl: './team-calendar-page.component.html',
  styleUrls: ['./team-calendar-page.component.scss']
})
export class TeamCalendarPageComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  calendarEvents = [
    // { title: 'event 1', date: '2019-11-01' },
    { title: 'event 2', start: '2019-11-02', end: '2019-11-15' },
    {
      title: 'Long Event',
      start: '2019-11-07',
      end: '2019-11-10',
      color: 'purple' // override!
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}
