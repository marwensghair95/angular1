import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

let STORAGE_KEY = 'Tasks_List';
@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  taskForm: FormGroup;
  id:any;
  
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('index');
    const tasks = this.storage.get(STORAGE_KEY) || [];

    this.taskForm = new FormGroup({
      title: new FormControl(tasks[this.id].title),
      description: new FormControl(tasks[this.id].description)
    });
  }
  submitTask() {
    this.id = this.route.snapshot.paramMap.get('index');
    const tasks = this.storage.get(STORAGE_KEY) || [];
    tasks.map( (task)=> {
     if (task==tasks[this.id]) {
       task.title= this.taskForm.value.title;
       task.description=this.taskForm.value.description;
     }
     this.storage.set(STORAGE_KEY, tasks);
     
    document.location.href = "tasks";
    });  

  }
}
