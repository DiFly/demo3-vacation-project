/* tslint:disable:max-line-length */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';
import { ProfileViewPageComponent } from './components/profile-view-page/profile-view-page.component';
import { ProfileLayoutComponent } from './components/profile-layout/profile-layout.component';
import { ProfileRequestVacationPageComponent } from './components/profile-request-vacation-page/profile-request-vacation-page.component';

import { AmountDateCustomPipe } from './pipes/amount-date-custom.pipe';


@NgModule({
  declarations: [ProfileViewPageComponent,
    ProfileLayoutComponent,
    ProfileRequestVacationPageComponent,
    AmountDateCustomPipe
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
