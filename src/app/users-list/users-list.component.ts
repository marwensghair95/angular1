import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  
  @Input() users:Array<Object>;
  @Output() i = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  remove(i){
    this.users.splice(i,1);
  }

  update(i){
    console.log(i);
    this.i.emit(i);
  }

}
