import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { RegiterComponent } from './regiter/regiter.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LoginV2Component } from './login-v2/login-v2.component';
import { RegistrV2Component } from './registr-v2/registr-v2.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavBarComponent,
    LoginComponent,
    FooterComponent,
    RegiterComponent,
    Error404Component,
    Error500Component,
    UsersListComponent,
    UserAddComponent,
    TaskAddComponent,
    TaskListComponent,
    TaskUpdateComponent,
    LoginV2Component,
    RegistrV2Component,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule 
  ],
  providers: [TaskAddComponent],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
