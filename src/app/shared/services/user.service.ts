import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import jwt_decode from 'jwt-decode';


import {environment} from '../../../environments/environment';
import {User, UserPosition, UserStatus} from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiURL = environment.API_URL2 + 'api/Employee/';
  // private apiURL = 'https://test-heroku-app-rest.herokuapp.com/user-details/';
  private currentUser: User;
  private userSubject = new Subject<User>();
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


  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiURL}${id}`).pipe(
      tap( data => {
        console.log(data);
      }),

      map( data => {
        let tmp: any = data.position;
        switch (tmp) {
          case 'AccountManager':
            tmp = UserPosition.AccountManager;
            break;
          case 'TeamLeader':
            tmp = UserPosition.TeamLeader;
            break;
          case 'Admin':
            tmp = UserPosition.Admin;
            break;
          default:
            tmp = tmp;
        }
        data.position = tmp;

        let tmpStatus: any = data.status;
        switch (tmpStatus) {
          case 'Active':
            tmpStatus = UserStatus.Active;
            break;
          case 'Dismiss':
            tmpStatus = UserStatus.Dismiss;
            break;
          default:
            tmpStatus = tmpStatus;
        }
        data.status = tmpStatus;

        // this.currentUser = data;
        return data;
      })
    );
  }
}
