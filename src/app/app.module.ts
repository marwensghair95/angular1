import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RegiterComponent } from './regiter/regiter.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';


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
    TaskUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
