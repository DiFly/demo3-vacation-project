import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import {TeamModel} from '../models/team-model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiURL = environment.API_URL2 + 'api/Team';

  constructor(private http: HttpClient) { }

  getTeam() {
    return this.http.get<TeamModel[]>(`${this.apiURL}`);
  }

  postTeam(newTeam: TeamModel) {
    return this.http.post<TeamModel>(`${this.apiURL}`, newTeam);
  }

  putTeam(changeTeam: TeamModel) {
    return this.http.post<TeamModel>(`${this.apiURL}`, changeTeam);
  }

  getTeamAll() {
    return this.http.get<TeamModel[]>(`${this.apiURL}/all`);
  }

  getTeamById(id: string) {
    return this.http.get<TeamModel>(`${this.apiURL}/${id}`);
  }

  putTeamByIdStateDeleted(id: string, deleted: boolean) {
    return this.http.put(`${this.apiURL}/${id}/state/${deleted}`, null);
  }

  postTeamByIdUserEmployeeIdAdd(id: string, employeeId: string) {
    return this.http.post(`${this.apiURL}/${id}/user/${employeeId}/add`, null);
  }

  postTeamByIdUserEmployeeIdRemove(id: string, employeeId: string) {
    return this.http.post(`${this.apiURL}/${id}/user/${employeeId}/remove`, null);
  }
}
