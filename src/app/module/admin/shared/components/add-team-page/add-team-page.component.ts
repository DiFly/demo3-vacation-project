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
  usersForFoundMembers: EmployeeModel[];
  usersOfTeam: EmployeeModel[];

  constructor(
    private location: Location,
    private teamService: TeamService,
    private userService: EmployeeService
    ) {
    this.usersOfTeam = [];
  }

  ngOnInit() {
    this.addTeamForm = new FormGroup({
      teamName: new FormControl(),
      teamLeader: new FormControl(),
    });
    this.userService.getEmployeeAll().subscribe(data => {
      this.usersAll = data;
      this.usersForFoundMembers = data;
    });
  }

  cancel() {
    this.location.back();
  }

  saveNewTeam() {
    // ToDo save new team
  }

  addMemberToTeam(member: EmployeeModel) {
    if (this.usersOfTeam.includes(member)) {
      console.log('addMemberToTeam: null');
      return null;
    } else  {
      console.log('addMemberToTeam: push');
      this.usersOfTeam.push(member);
      this.usersForFoundMembers = this.usersForFoundMembers.filter(current => current.id !== member.id);
    }
  }

  delMemberFromTeam(member: EmployeeModel) {
    if (!this.usersOfTeam.includes(member)) {
      console.log('delMemberFromTeam: null');
      return null;
    } else  {
      console.log('delMemberFromTeam: delete');
      this.usersOfTeam = (this.usersOfTeam.filter(current => current.id !== member.id));
      this.usersForFoundMembers.push(member);
      // console.log(this.usersOfTeam);
    }
  }
}
