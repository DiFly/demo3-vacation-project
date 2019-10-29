import {Injectable} from '@angular/core';
import {User, UserPosition, UserStatus} from '../models/user-model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private apiURL = 'http://localhost:8080/user-details/';
  private apiURL = 'https://test-heroku-app-rest.herokuapp.com/user-details/';
  private currentUser: User;
  private userSubject = new Subject<User>();
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getCurrentUser() {
    this.getUser(10).subscribe(
      response => {
            this.userSubject.next(response);
          },
          error => {
            console.log(error);
          }
    );
  }

  // https://test-heroku-app-rest.herokuapp.com/user-details/10

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiURL}${id}`).pipe(
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
