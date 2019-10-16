/* tslint:disable:max-line-length */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { ProfileViewPageComponent } from './shared/components/profile-view-page/profile-view-page.component';
import { ProfileLayoutComponent } from './shared/components/profile-layout/profile-layout.component';
import { ProfileRequestVacationPageComponent } from './shared/components/profile-request-vacation-page/profile-request-vacation-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ProfileLayoutComponent, children: [
          {path: '', component: ProfileViewPageComponent},
          {path: 'request-vacation', component: ProfileRequestVacationPageComponent}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: [ProfileViewPageComponent, ProfileLayoutComponent, ProfileRequestVacationPageComponent]
})
export class UserModule {
}
