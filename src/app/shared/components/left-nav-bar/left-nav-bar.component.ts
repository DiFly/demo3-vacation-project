import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.scss']
})
export class LeftNavBarComponent implements OnInit {
  userRole: 'Team Leader';
  // Administrator, Team Leader

  constructor() { }

  ngOnInit() {
    const tmpToken = jwt_decode(sessionStorage.getItem('auth_token'));
    this.userRole = tmpToken.role;
  }

}
