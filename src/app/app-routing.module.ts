import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';


const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: '', component: MainLayoutComponent, children: [
      {path: 'profile', loadChildren: './module/user/user.module#UserModule'},
      {path: 'team-leader', loadChildren: './module/team-leader/team-leader.module#TeamLeaderModule'},
      {path: 'admin', loadChildren: './module/admin/admin.module#AdminModule'},
    ]},
  {path: 'auth', loadChildren: './module/auth/auth.module#AuthModule'},
  {path: '**', redirectTo: '/auth/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
