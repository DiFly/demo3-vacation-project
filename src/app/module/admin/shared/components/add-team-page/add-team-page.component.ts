import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TeamService} from '../../../../../shared/services/team.service';
import {EmployeeService} from '../../../../../shared/services/employee.service';
import {EmployeeModel} from '../../../../../shared/models/employee-model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-team-page',
  templateUrl: './add-team-page.component.html',
  styleUrls: ['./add-team-page.component.scss']
})
export class AddTeamPageComponent implements OnInit {
  addTeamForm: FormGroup;
  usersAll: EmployeeModel[];
  usersOfTeam: EmployeeModel[];

  constructor(
    private location: Location,
    private teamService: TeamService,
    private userService: EmployeeService
    ) {
    this.usersOfTeam = new Array();
  }

  ngOnInit() {
    this.addTeamForm = new FormGroup({
      teamName: new FormControl(),
      teamLeader: new FormControl(),
    });
    // this.addTeamForm.controls.vacationType.setValue('0', {onlySelf: true});
  }

  cancel() {
    this.location.back();
  }

  saveNewTeam() {
  }
}
