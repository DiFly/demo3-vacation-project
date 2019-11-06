import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.scss']
})
export class LeftNavBarComponent implements OnInit {
  currentStatus: 'Account Manager';
  // Administrator, Team Leader

  constructor() { }

  ngOnInit() {
  }

}
