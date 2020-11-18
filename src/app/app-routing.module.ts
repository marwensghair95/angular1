import { error } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { LoginV2Component } from './login-v2/login-v2.component';
import { LoginComponent } from './login/login.component';
import { RegistrV2Component } from './registr-v2/registr-v2.component';
import { RegiterComponent } from './regiter/regiter.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { UserAddComponent } from './user-add/user-add.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'register',
    component: RegistrV2Component
  },
  {
    path: 'login',
    component: LoginV2Component
  },{
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UserAddComponent
  }  ,
  {
    path: 'tasks',
    component: TaskListComponent
  } ,
  {
    path: 'tasks/add',
    component: TaskAddComponent
  } ,
  {
    path: 'tasks/update/:index',
    component: TaskUpdateComponent
  } ,
  {
    path: 'error500',
    component: Error500Component
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
