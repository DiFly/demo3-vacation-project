import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-team-page',
  templateUrl: './add-team-page.component.html',
  styleUrls: ['./add-team-page.component.scss']
})
export class AddTeamPageComponent implements OnInit {
  addTeamForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addTeamForm = new FormGroup({
      teamName: new FormControl(),
      teamLeader: new FormControl(),
      teamMembers: new FormControl()
    });
    // this.addTeamForm.controls.vacationType.setValue('0', {onlySelf: true});
  }

  cancel() {
  }

  saveNewTeam() {
  }
}
