import { Component, OnInit } from '@angular/core';
// import { TaskAddComponent } from '../task-add/task-add.component';
import { Inject, Injectable } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

let STORAGE_KEY = 'Tasks_List';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskTabTitre = new FormArray([]);
  taskTabDesc = new FormArray([]);
  name = "hhh";
  // constructor(private TaskAddComponent: TaskAddComponent) { }
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
  ngOnInit(): void {
    //  console.log(this.TaskAddComponent);
    const tasks = this.storage.get(STORAGE_KEY) || [];
    tasks.forEach(task => {
      this.taskTabTitre.push(new FormControl(task.title));
      this.taskTabDesc.push(new FormControl(task.description));
    });


  }


}
