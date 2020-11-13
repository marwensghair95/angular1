import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})


export class TaskAddComponent implements OnInit {
  taskForm: FormGroup;
  submited:boolean=false;

  constructor() { }
  
  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required,Validators.minLength(5)])
  });
  }
  
  submitTask() {
    this.submited=true;
    if (this.taskForm.invalid) {
      return;
    }
    
      console.log(this.taskForm.value);
 
}
}
