import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.css']
})
export class RegiterComponent implements OnInit {
  username :string;
  mail:string;
  passw:string;
  confpass:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
