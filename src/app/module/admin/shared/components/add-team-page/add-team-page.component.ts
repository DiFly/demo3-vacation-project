import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TeamService} from '../../../../../shared/services/team.service';
import {EmployeeService} from '../../../../../shared/services/employee.service';
import {EmployeeModel} from '../../../../../shared/models/employee-model';
import {Location} from '@angular/common';
import {TeamModel} from '../../../../../shared/models/team-model';

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
  leaderList: EmployeeModel[];
  currentLeader: EmployeeModel;

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
    // ToDo save new team, change filter to add team leader
    const newTeam = {
      name: this.addTeamForm.value.teamName,
      // teamLeadName: this.addTeamForm.value.teamName,
      teamLeadName: 'Vasyl T',
      teamLeadId: '4cea5a26-5fc2-4d8d-89f7-f90a6947efd5',
      deleted: false,
      employees: this.usersOfTeam,
      employeeCount: this.usersOfTeam.length
    } as TeamModel;

    this.teamService.postTeam(newTeam).subscribe(response => {
      console.log(response);
      this.addTeamForm.reset();
      this.usersOfTeam = [];
    });
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
