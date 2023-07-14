import { Component, ViewEncapsulation } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-management-system',
  templateUrl: './task-management-system.component.html',
  styleUrls: ['./task-management-system.component.css'],
  encapsulation:ViewEncapsulation.None
})

export class TaskManagementSystemComponent {
  allTasks:Task[] = [
    new Task("Make a Plan", "Making a plan about what components we should create !", "none", this.generateRandomString()),
  ];
  showTaskContainer:boolean = true;
  onSaveTask(){

  }

  createTaskHandler(showCreateTask:any){
    if(showCreateTask) this.showTaskContainer = false;
    else this.showTaskContainer = true;
  }

  generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return (result).toLowerCase();
  }
}