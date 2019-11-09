import { Component, OnInit } from '@angular/core';
import {TeamService} from '../../../../../shared/services/team.service';
import {TeamModel} from '../../../../../shared/models/team-model';

@Component({
  selector: 'app-list-team-page',
  templateUrl: './list-team-page.component.html',
  styleUrls: ['./list-team-page.component.scss']
})
export class ListTeamPageComponent implements OnInit {
  teams: TeamModel[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam().subscribe( data => {
        this.teams = data;
        console.log(data);
      }
    );
  }

}
