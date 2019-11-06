import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {UserService} from '../../../../../shared/services/user.service';
import {EmployeeModel} from '../../../../../shared/models/employee-model';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {
  currentUser: EmployeeModel;

  constructor(private userService: UserService,
              private http: HttpClient) {
    this.currentUser = {
      id: 'emptyId',
      firstName: 'FirstName',
      surname: 'Surname',
      avatar: './assets/img/user.png',
      birthdate: new Date(),
      jobTitle: 'Your job',
      workEmail: 'Your work email',
      email: 'Your self email',
      phone: '+380123456789',
      skype: 'Your skype',
      workStartDate: new Date(),
      isActive: true,
      workEndDate: new Date(),
      deleted: false,
      balance: 1,
      teamId: 'teamId'
    // teams?: TeamModel[]



    // firstname: 'Name',
    // surname: 'Surname',
    // dateend: undefined,
    // datestart: undefined,
    // daysavailable: 0,
    // emailself: '',
    // emailwork: '',
    // id: 'testDI',
    // phone: '',
    // position: undefined,
    // skype: '',
    // status: undefined,
    // team: undefined,
    // userpic: '/assets/img/random-user_imageF39.png',
  };
  }

  ngOnInit() {
    this.userService.user$.subscribe( user => {
      this.currentUser = user;
      console.log('header-layout onInit', this.currentUser);
    });
  }

}
