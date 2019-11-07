import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {EmployeeModel} from '../../models/employee-model';
import {AuthService} from '../../../module/auth/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  currentUser: EmployeeModel;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: Router
    ) {
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

  logout() {
    this.authService.LogOut();
    this.route.navigate(['/auth/login']);
  }
}
