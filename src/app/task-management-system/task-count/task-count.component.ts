import { Component } from '@angular/core';
import { TaskService } from '../shared/tasks.service';

@Component({
  selector: 'app-task-count',
  templateUrl: './task-count.component.html',
  styleUrls: ['./task-count.component.css']
})
export class TaskCountComponent {
  completed:number = 0;
  inProgress:number = 0;
  constructor(public taskService:TaskService){
    this.completed  = this.taskService.allTasks.filter((task)=>task.status === 'Completed').length;
    this.inProgress = this.taskService.allTasks.filter((task)=>task.status === 'In Progress').length;
  }
}
