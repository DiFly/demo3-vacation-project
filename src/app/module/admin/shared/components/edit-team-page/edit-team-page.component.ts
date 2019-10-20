import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-team-page',
  templateUrl: './edit-team-page.component.html',
  styleUrls: ['./edit-team-page.component.scss']
})
export class EditTeamPageComponent implements OnInit {
  editTeamForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.editTeamForm = new FormGroup({
      teamName: new FormControl(),
      teamLeader: new FormControl(),
      teamMembers: new FormControl()
    });
  }

  cancel() {
  }

  editTeam() {
  }
}
