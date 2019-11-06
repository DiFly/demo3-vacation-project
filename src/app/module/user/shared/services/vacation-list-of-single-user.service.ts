import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Vacation} from '../../../../shared/models/vacation-model';

@Injectable()
export class VacationListOfSingleUserService {
  private apiUrl = 'http://localhost:8080/vacations/user/';
  // private apiUrl = 'https://test-heroku-app-rest.herokuapp.com/vacations/user/';

  constructor(private http: HttpClient) { }

  getVacations(id: number) {
    return this.http.get<Vacation[]>(`${this.apiUrl}${id}`).pipe(
      map( data => {
          // const available: AvailableDays = {
          //   userId: +data.userId,
          //   days: +data.days
          // }
          return data;
        }
      )
    );
  }
}
