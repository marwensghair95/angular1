import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() fname:String;
  @Input() lname:String;
  @Output() firstname:string;
  @Output() lastname:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
