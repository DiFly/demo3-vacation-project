import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user-model';
import {UserService} from '../../services/user.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  currentUser;
  // currentUser: User;

  constructor(private userservice: UserService) {
    // this.currentUser = {
    //   firstname: 'Name',
    //   surname: 'Surname',
    //   dateend: undefined,
    //   datestart: undefined,
    //   daysavailable: 0,
    //   emailself: '',
    //   emailwork: '',
    //   id: 0,
    //   phone: '',
    //   position: undefined,
    //   skype: '',
    //   status: undefined,
    //   team: undefined,
    //   userpic: '/assets/img/random-user_imageF39.png',
    // };
  }

  ngOnInit() {
    // this.currentUser = this.getCurrentUser();
    this.userservice.user$.subscribe( user => {
      this.currentUser = user;
      console.log('main-layout', this.currentUser);
    });
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userservice.getCurrentUser();
  }

}
