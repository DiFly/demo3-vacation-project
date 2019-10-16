import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { AuthLayoutComponent } from './shared/components/auth-layout/auth-layout.component';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './shared/components/forgot-password-page/forgot-password-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent,
    ForgotPasswordPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: AuthLayoutComponent, children: [
          {path: 'login', component: LoginPageComponent},
          {path: 'forgot-password', component: ForgotPasswordPageComponent}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule {
}
