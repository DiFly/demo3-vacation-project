import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {User} from '../../models/user-model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  currentUser: User;

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
