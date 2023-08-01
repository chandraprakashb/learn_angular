import { Component, ViewEncapsulation } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/tasks.service';

@Component({
  selector: 'app-task-management-system',
  templateUrl: './task-management-system.component.html',
  styleUrls: ['./task-management-system.component.css'],
  encapsulation:ViewEncapsulation.None
})

export class TaskManagementSystemComponent {
  showTaskContainer:boolean = true;

  constructor(public taskService:TaskService) {}

  createTaskHandler(showCreateTask:any){
    if(showCreateTask) this.showTaskContainer = false;
    else this.showTaskContainer = true;
  }

}