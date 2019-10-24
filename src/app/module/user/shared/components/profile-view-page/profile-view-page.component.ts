import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../shared/models/user-model';

@Component({
  selector: 'app-profile-view-page',
  templateUrl: './profile-view-page.component.html',
  styleUrls: ['./profile-view-page.component.scss']
})
export class ProfileViewPageComponent implements OnInit {
  currentUser: User;

  constructor() { }

  ngOnInit() {
  }

}
