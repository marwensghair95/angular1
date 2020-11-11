import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  first_name:String="";
  last_name:String="";

  constructor() { }

  ngOnInit(): void {
  }

}
