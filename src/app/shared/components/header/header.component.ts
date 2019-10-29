import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user-model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface ShortDetails {
  // userName: 'No name';
  // userPic: '/assets/img/random-user_imageF39.png';
  // userId: 0;
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
  @Input() currentUser: Observable<User>;
  simpleUser: Observable<ShortDetails>;

  constructor() {
    // this.simpleUser = {
    //     userName: 'No name',
    //     userId: 0,
    //     userPic: '/assets/img/random-user_imageF39.png'
    // };
  }

  ngOnInit() {
    // this.simpleUser = {
    //   userName: (this.currentUser.firstname + ' ' + this.currentUser.surname),
    //   userId: this.currentUser.id,
    //   userPic: this.currentUser.userpic
    // };
    this.simpleUser = this.currentUser.pipe(
      map(data => {
          const shortUser: ShortDetails = {
            userName: (data.firstname + ' ' + data.surname),
            userPic: data.userpic,
            userId: data.id
          };
          return shortUser;
        }
      )
    );
  }

}
