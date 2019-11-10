import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class CalendarService {

  constructor() { }

  getData(): Observable<any[]> {
    const data = [
      { title: 'event 2', start: '2019-11-15', end: '2019-11-18', allDay: false },
      { title: 'event 4', start: '2019-11-10', end: '2019-11-19', allDay: false },
      { title: 'event 3', start: '2019-11-22', end: '2019-11-25', allDay: true },
    ];
    return of(data);
  }
}

