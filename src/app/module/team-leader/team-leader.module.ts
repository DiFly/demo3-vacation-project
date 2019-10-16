import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { ListVacationRequestsPageComponent } from './shared/components/list-vacation-requests-page/list-vacation-requests-page.component';
import { TeamCalendarPageComponent } from './shared/components/team-calendar-page/team-calendar-page.component';
import { ListEmployeesPageComponent } from './shared/components/list-employees-page/list-employees-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', redirectTo: '/team/vacation-requests', pathMatch: 'full'},
      {path: 'vacation-requests', component: ListVacationRequestsPageComponent},
      {path: 'list-employees', component: ListEmployeesPageComponent},
      {path: 'calendar', component: TeamCalendarPageComponent}
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: [ListVacationRequestsPageComponent, TeamCalendarPageComponent, ListEmployeesPageComponent]
})
export class TeamLeaderModule {
}
