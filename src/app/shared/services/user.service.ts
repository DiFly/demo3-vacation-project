import {Injectable} from '@angular/core';
import {User, UserPosition, UserStatus} from '../models/user-model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getCurrentUser() {
    return this.getUser(10);
  }

  getUser(id: number) {
    return this.http.get<User>(`http://localhost:8080/user-details/${id}`).pipe(
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
        return data;
      })
    );
  }
}
