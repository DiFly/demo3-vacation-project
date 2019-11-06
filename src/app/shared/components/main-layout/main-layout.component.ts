import {Component, OnInit} from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  userRole: 'Account Manager';

  constructor() {}

  ngOnInit() {
    const tmpToken = jwt_decode(sessionStorage.getItem('auth_token'));
    this.userRole = tmpToken.role;
  }

}
