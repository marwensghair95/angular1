import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  taskForm: FormGroup;
  id:any;
  constructor(private taskService: TasksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('index');
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.taskForm = new FormGroup({
      title: new FormControl(tasks[this.id].title),
      description: new FormControl(tasks[this.id].description)
    });
  }
  submitTask() {
    this.id = this.route.snapshot.paramMap.get('index');
    this.taskService.updateTask(this.id,this.taskForm)
     
    document.location.href = "tasks";

  }
}
