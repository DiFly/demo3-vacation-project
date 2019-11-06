import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {EmployeeModel} from '../../models/employee-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  currentUser: EmployeeModel;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.user$.subscribe( user => {
      this.currentUser = user;
      console.log('header-layout onInit', this.currentUser);
    });
    this.userService.getCurrentUser();
  }

  ngOnChanges() {
      console.log('header-layout onchanges', this.currentUser);
  }

}
