import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Vacation} from '../models/vacation-model';
import {map} from 'rxjs/operators';

@Injectable()
export class VacationService {
  private apiURL = environment.API_URL2 + 'api/Vacation';

  constructor(private http: HttpClient) { }

  getAllVacation() {
    return this.http.get<Vacation[]>(`${this.apiURL}`).pipe(
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

  // ToDo Post api/Vacation create
  // ToDo Put api/Vacation change

  getVacationById(id: string) {
    return this.http.get<Vacation>(`${this.apiURL}/${id}`).pipe(
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

  deleteVacationById(id: string) {
    return this.http.delete<Vacation>(`${this.apiURL}/${id}`).pipe(
      // ToDo no values, change it in future
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

  getAllVacationByUserId(id: string) {
    return this.http.get<Vacation[]>(`${this.apiURL}/employee/${id}`).pipe(
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

  getAllVacationByTeamId(id: string) {
    return this.http.get<Vacation[]>(`${this.apiURL}/team/${id}`).pipe(
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

  getAllVacationByTeamIdRangeFromAndTo(id: string, from: string, to: string) {
    return this.http.get<Vacation[]>(`${this.apiURL}/team/${id}/range/${from}/${to}`).pipe(
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

  getAllVacationPending() {
    return this.http.get<Vacation[]>(`${this.apiURL}/pending`).pipe(
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

  // ToDo ​/api​/Vacation​/{id}​/status
}
