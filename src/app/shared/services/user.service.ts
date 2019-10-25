import {Injectable} from '@angular/core';
import {User, UserPosition} from '../models/user-model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getCurrentUser() {
    return this.http.get<User>('http://localhost:8080/user-details/10').pipe(
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
        return data;
      })
    );
  }

  getUser(id: number) {
    return this.http.get<User>(`http://localhost:8080/user-details/${id}`);
  }
}
