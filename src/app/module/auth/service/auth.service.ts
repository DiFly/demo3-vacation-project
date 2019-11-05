import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  SingIn(userDetails: {email: string, password: string}) {
    const formData = new FormData();

    formData.append('username', userDetails.email);
    formData.append('password', userDetails.password);
    formData.append('client_id', 'api');
    formData.append('client_secret', 'vacationsecrets');
    formData.append('grant_type', 'password');

    return this.http.post(environment.API_URL2 + 'connect/token', formData)
      .pipe(map((response) => {
        console.log('SingIn(): ', response);
        sessionStorage.setItem('auth_token', response['access_token']);
      }));
  }

  IsUserLoggedIn() {
    const user = sessionStorage.getItem('auth_token');
    console.log(!user === null );
    return !(user === null);
  }

  LogOut() {
    sessionStorage.removeItem('auth_token');
  }
}
