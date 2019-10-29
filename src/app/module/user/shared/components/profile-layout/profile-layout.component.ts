import {Component, OnInit} from '@angular/core';

import {UserService} from '../../../../../shared/services/user.service';
import {User} from '../../../../../shared/models/user-model';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService) {
    this.currentUser = {
      firstname: 'Name',
      surname: 'Surname',
      dateend: undefined,
      datestart: undefined,
      daysavailable: 0,
      emailself: '',
      emailwork: '',
      id: 0,
      phone: '',
      position: undefined,
      skype: '',
      status: undefined,
      team: undefined,
      userpic: '/assets/img/random-user_imageF39.png',
    };
  }

  ngOnInit() {
    this.userService.user$.subscribe( user => {
      this.currentUser = user;
      console.log('header-layout onInit', this.currentUser);
    });
  }

}
