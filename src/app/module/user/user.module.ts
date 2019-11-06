/* tslint:disable:max-line-length */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';
import { ProfileViewPageComponent } from './shared/components/profile-view-page/profile-view-page.component';
import { ProfileLayoutComponent } from './shared/components/profile-layout/profile-layout.component';
import { ProfileRequestVacationPageComponent } from './shared/components/profile-request-vacation-page/profile-request-vacation-page.component';

import { AmountDatePipe } from './shared/pipes/amount-date.pipe';


@NgModule({
  declarations: [ProfileViewPageComponent,
    ProfileLayoutComponent,
    ProfileRequestVacationPageComponent,
    AmountDatePipe
  ],
  providers: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ProfileLayoutComponent, children: [
          {path: '', redirectTo: '/profile/view', pathMatch: 'full'},
          {path: 'view', component: ProfileViewPageComponent},
          {path: 'request-vacation/:id', component: ProfileRequestVacationPageComponent}
        ]
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule {
}
