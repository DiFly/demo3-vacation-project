import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AvailableDays} from '../models/available-days.model';

@Injectable()
export class AvailableDaysService {
  private apiUrl = 'http://localhost:8080/user-days-available/';
  // private apiUrl = 'https://test-heroku-app-rest.herokuapp.com/user-days-available/';

  constructor(private http: HttpClient) { }

  getAvailableDaysOfUser(id: number) {
    return this.http.get<AvailableDays>(`${this.apiUrl}${id}`).pipe(
      map( data => {
          const available: AvailableDays = {
            userId: +data.userId,
            days: +data.days
          }
          return available;
        }
      )
    );
  }
}
