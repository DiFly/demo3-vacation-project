import {Component, OnInit} from '@angular/core';

import {UserService} from '../../../../../shared/services/user.service';
import {User, UserStatus} from '../../../../../shared/models/user-model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {
  currentUser: User;

  constructor(private userservice: UserService) {
    this.currentUser = {
      firstname: 'Name',
      surname: 'Surname',
      dateend: undefined,
      datestart: undefined,
      daysavailable: 0,
      emailself: '',
      emailwork: '',
      id: '',
      phone: '',
      position: undefined,
      skype: '',
      status: undefined,
      team: undefined,
      userpic: '',
    };
  }

  ngOnInit() {
    this.userservice.getCurrentUser().pipe(
      tap(ev => console.log(ev))
    ).subscribe(
      responce => {
        this.currentUser = responce;
      },
      error => {
        console.log(error);
      }
    );
  }

}
