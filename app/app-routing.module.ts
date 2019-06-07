import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{ path: 'user', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ,  ]
})
export class AppRoutingModule { }
