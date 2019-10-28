import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user-model';

interface ShortDetails {
  userName: string;
  userPic: string;
  userId: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() currentUser: User;
  simpleUser: ShortDetails;

  constructor() {
    this.simpleUser = {
        userName: 'No name',
        userId: 0,
        userPic: '/assets/img/random-user_imageF39.png'
    };
  }

  ngOnInit() {
    this.simpleUser = {
      userName: (this.currentUser.firstname + ' ' + this.currentUser.surname),
      userId: this.currentUser.id,
      userPic: this.currentUser.userpic
    };
  }

}
