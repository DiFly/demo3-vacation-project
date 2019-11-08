import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';
import jwt_decode from 'jwt-decode';

import {environment} from '../../../environments/environment';
import {EmployeeModel} from '../models/employee-model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiURL = environment.API_URL2 + 'api/Employee';
  // private apiURL = 'https://test-heroku-app-rest.herokuapp.com/user-details/';
  private userSubject = new BehaviorSubject<EmployeeModel>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getCurrentUser() {
    const currentTokenOfUser = jwt_decode(sessionStorage.getItem('auth_token'));
    console.log('token object : ', currentTokenOfUser);
    this.getEmployeeById(currentTokenOfUser.sub).subscribe(
      response => {
            this.userSubject.next(response);
          },
          error => {
            console.log(error);
          }
    );
  }

  getEmployeeById(id: string): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.apiURL}/${id}`).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }

  getEmployee() {
    return this.http.get<EmployeeModel[]>(`${this.apiURL}/`).pipe(
      tap(data => {
        console.log(data);
      })
    );
  }

  postEmployee(employee: EmployeeModel) {
    return this.http.post(this.apiURL, employee).pipe(
      tap(data => {
        console.log('Tap from create employee', data);
      }),
      catchError( error => {
        console.log('Error from create employee', error);
        return of({results: null});
      })
    );
  }

  putEmployee(employee: EmployeeModel) {
    return this.http.put(this.apiURL, employee).pipe(
      tap(data => {
        console.log('Tap from create employee', data);
      }),
      catchError( error => {
        console.log('Error from create employee', error);
        return of({results: null});
      })
    );
  }

  getEmployeePagedOffsetCount(offset: number, count: number) {
    return this.http.get<EmployeeModel[]>(`${this.apiURL}/paged/${offset}/${count}`).pipe(
      tap(data => {
        console.log(data);
      })
    );
  }

  getEmployeeAll() {
    return this.http.get<EmployeeModel[]>(`${this.apiURL}/all`).pipe(
      tap(data => {
        console.log(data);
      })
    );
  }

  getEmployeeAllPagedOffsetCount(offset: number, count: number) {
    return this.http.get<EmployeeModel[]>(`${this.apiURL}/all/paged/${offset}/${count}`).pipe(
      tap(data => {
        console.log(data);
      })
    );
  }

  getEmployeeTeamById(id: string) {
    return this.http.get<EmployeeModel[]>(`${this.apiURL}/team/${id}`).pipe(
      tap(data => {
        console.log(data);
      })
    );
  }

  getEmployeeTeamByIdPagedOffsetCount(id: string, offset: number, count: number) {
    return this.http.get<EmployeeModel[]>(`${this.apiURL}/team/${id}/paged/${offset}/${count}`).pipe(
      tap(data => {
        console.log(data);
      })
    );
  }

  putEmployeeByIdStateDeleted(id: string, deleted: boolean) {
    return this.http.put<EmployeeModel>(`${this.apiURL}/${id}/state/${deleted}`, null).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }
}
