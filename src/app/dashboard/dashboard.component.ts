import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
users:Array<any>;

  constructor(private UserServices: UserService) { }

  ngOnInit(): void {
    this.UserServices.getUsers().subscribe((response)=>{
       this.users=response;
       console.log(this.users);
    }); 
  }
}
