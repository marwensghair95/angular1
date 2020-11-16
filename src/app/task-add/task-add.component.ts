import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


let STORAGE_KEY = 'Tasks_List';
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})



@Injectable()
export class TaskAddComponent implements OnInit {
  taskForm: FormGroup;
  submited: boolean = false;



  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

  }

  submitTask() {
    this.submited = true;
    if (this.taskForm.invalid) {
      return;
    }
    console.log(this.taskForm.value.description);

    const tasks = this.storage.get(STORAGE_KEY) || [];
    tasks.push({
      title: this.taskForm.value.title,
      description: this.taskForm.value.description

    });
    this.storage.set(STORAGE_KEY, tasks);

    document.location.href = "tasks";
  }
}
