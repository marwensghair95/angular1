import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  addTask(task){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks));
  };
  updateTask(id,taskForm){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(id,1,taskForm.value);

     localStorage.setItem('tasks',JSON.stringify(tasks));
  };
  deleteTask(){

  };
  listTask(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks;
  };
}
