import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { ListVacationRequestsPageComponent } from './shared/components/list-vacation-requests-page/list-vacation-requests-page.component';
import { TeamCalendarPageComponent } from './shared/components/team-calendar-page/team-calendar-page.component';
import { ListEmployeesPageComponent } from './shared/components/list-employees-page/list-employees-page.component';
import { EmployeeProfilePageComponent } from './shared/components/employee-profile-page/employee-profile-page.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListVacationRequestsPageComponent,
    TeamCalendarPageComponent,
    ListEmployeesPageComponent,
    EmployeeProfilePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', redirectTo: '/team/vacation-requests', pathMatch: 'full'},
      {path: 'vacation-requests', component: ListVacationRequestsPageComponent},
      {path: 'employees-list', component: ListEmployeesPageComponent},
      {path: 'employees-list/employee-profile/:id', component: EmployeeProfilePageComponent},
      {path: 'calendar', component: TeamCalendarPageComponent}
    ]),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class TeamLeaderModule {
}
