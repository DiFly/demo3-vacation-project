import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import jwt_decode from 'jwt-decode';


import {environment} from '../../../environments/environment';
import {User, UserPosition, UserStatus} from '../models/user-model';
import {EmployeeModel} from '../models/employee-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiURL = environment.API_URL2 + 'api/Employee/';
  // private apiURL = 'https://test-heroku-app-rest.herokuapp.com/user-details/';
  // private currentUser: User;
  private userSubject = new BehaviorSubject<EmployeeModel>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getCurrentUser() {
    const currentTokenOfUser = jwt_decode(sessionStorage.getItem('auth_token'));
    console.log('token object : ', currentTokenOfUser);
    this.getUser(currentTokenOfUser.sub).subscribe(
      response => {
            this.userSubject.next(response);
          },
          error => {
            console.log(error);
          }
    );
  }


  getUser(id: string): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.apiURL}${id}`).pipe(
      tap( data => {
        console.log(data);
      })
    );
  }
}
