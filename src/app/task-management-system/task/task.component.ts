import {Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task:Task;
  @Input('taskIndex') taskId:number;

  @ViewChild('completedCheck') completedCheck:ElementRef; 
  @ViewChild('inProgressCheck') inProgressCheck:ElementRef; 

  completedCheckId:string = 'completed-';
  inProgressCheckId:string = 'in-progress-';

  constructor(private taskService:TaskService) {
    
  }

  changeStatus(event:Event){
    var completedCheck  = this.completedCheck.nativeElement;
    var inProgressCheck = this.inProgressCheck.nativeElement;
    var check = event.target as HTMLInputElement; 
    switch(check.value){
      case "Completed":
            if(check.checked) {
              console.log(this.taskService.allTasks[this.taskId]);
              this.taskService.allTasks[this.taskId].status='Completed'
              console.log(this.taskService.allTasks[this.taskId]);
              inProgressCheck.checked = false;
            }
          break;
      case "In Progress":
            if(check.checked) {
              console.log(this.taskService.allTasks[this.taskId]);
              this.taskService.allTasks[this.taskId].status='In Progress'
              console.log(this.taskService.allTasks[this.taskId]);
              completedCheck.checked = false;
            }
          break;
    }
  }

  ngOnInit(): void {
    this.completedCheckId   = this.completedCheckId +this.generateUniqueID(); 
    this.inProgressCheckId  = this.inProgressCheckId+this.generateUniqueID(); 
    
  }

  generateUniqueID(): number {
    return Date.now() + Math.floor(Math.random() * 1000);
  }
}
