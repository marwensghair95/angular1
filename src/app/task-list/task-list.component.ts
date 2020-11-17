import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';




@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:Array<any>;
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
   this.tasks=this.taskService.listTask()

  }
  deletTask(i){
  this.taskService.deleteTask(i) 
  }

}
