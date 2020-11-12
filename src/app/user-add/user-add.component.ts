import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})


export class UserAddComponent implements OnInit {
  fname: String = "";
  lname: String = "";
  showAddButton:boolean=true;
  usersList: Array<Object> = [];
  @Output() i ;
  @Output() j ;
  index:any;
 

  constructor() { }

  ngOnInit(): void {
  }

  adduser() {
    var user= {
      first_name: this.fname,
      last_name: this.lname
    };
    this.usersList.push(user);
    this.fname = "";
    this.lname= "";
  }
 
  update(i)
  {
   
    this.index=i;
    this.showAddButton=false;
   var user:any=this.usersList[i];
    this.fname =user.first_name;
    this.lname =user.last_name;
  }
  saveUpdate(){

    this.showAddButton=true;
   var newuser= {
    first_name: this.fname,
    last_name: this.lname
  }

    this.usersList.splice(this.index,1,newuser);
    this.fname = "";
    this.lname= "";
  }
  delete(j)
  {
    this.usersList.splice(j,1);
    console.log(j);
    
  }
  

}
