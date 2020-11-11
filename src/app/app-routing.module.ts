import { error } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { LoginComponent } from './login/login.component';
import { RegiterComponent } from './regiter/regiter.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'register',
    component: RegiterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'error500',
    component: Error500Component
    
  },
  {
    path: '**',
    component: Error404Component
  },
  {
    path: 'ajoute-user',
    component: UserAddComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
