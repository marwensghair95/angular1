import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  taskForm: FormGroup;
  id:any;
  constructor(private taskService: TasksService, private router: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('index');
    this.taskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    });
    const task = this.taskService.getTaskbyid(this.id);
    this.taskForm.patchValue(task);
  }
  submitTask() {
    this.id = this.router.snapshot.paramMap.get('index');
    this.taskService.updateTask(this.id,this.taskForm)
    this.route.navigateByUrl("/tasks");
   

  }
  
}
