import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

interface ShortDetails {
  userName: string;
  userPic: '/assets/img/random-user_imageF39.png';
  userId: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

}
