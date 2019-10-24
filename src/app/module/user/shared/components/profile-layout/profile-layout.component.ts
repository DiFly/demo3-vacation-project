import { Component, OnInit } from '@angular/core';

import {UserService} from '../../../../../shared/services/user.service';
import {User, UserPosition, UserStatus} from '../../../../../shared/models/user-model';
import {Observable} from 'rxjs';
import {Team} from '../../../../../shared/models/team-model';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {
  currentUser: User;

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getCurrentUser().pipe(
      tap(ev => console.log(ev))
    ).subscribe(


      // (data: User) => this.currentUser = {
      //   id: data.id,
      //   position: data.position,
      //   firstname: data.firstname,
      //   surname: data.surname,
      //   userpic: data.userpic,
      //   emailself: data.emailself,
      //   emailwork: data.emailwork,
      //   phone: data.phone,
      //   skype: data.skype,
      //   datestart: data.datestart,
      //   status: data.status,
      //   daysavailable: data.daysavailable
      // }
    );
  }

}
