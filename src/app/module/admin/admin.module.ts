import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { EditProfilePageComponent } from './shared/components/edit-profile-page/edit-profile-page.component';
import { AddEmployeePageComponent } from './shared/components/add-employee-page/add-employee-page.component';
import { AddTeamPageComponent } from './shared/components/add-team-page/add-team-page.component';
import { EditTeamPageComponent } from './shared/components/edit-team-page/edit-team-page.component';
import { ListTeamPageComponent } from './shared/components/list-team-page/list-team-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewTeamProfilePageComponent } from './shared/components/view-team-profile-page/view-team-profile-page.component';

@NgModule({
  declarations: [
    EditProfilePageComponent,
    AddEmployeePageComponent,
    AddTeamPageComponent,
    EditTeamPageComponent,
    ListTeamPageComponent,
    ViewTeamProfilePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', redirectTo: '/profile/view', pathMatch: 'full'},
      {path: 'add-employee', component: AddEmployeePageComponent},
      {path: 'add-team', component: AddTeamPageComponent},
      {path: 'edit-employee/:id', component: EditProfilePageComponent},
      {path: 'edit-team/:id', component: EditTeamPageComponent},
      {path: 'team-list', component: ListTeamPageComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule {

}
