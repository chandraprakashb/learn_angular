import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  taskName:string = '';
  taskDiscription:string = '';
  showCreateTaskForm:boolean = false
   
  @Output() createTask = new EventEmitter<boolean>();

  // action = 'show' or 'hide'
  taskFormHadler(action:string){
    switch(action){
      case "show":
        this.showCreateTaskForm = true;
        break;
      case "hide":
        this.showCreateTaskForm = false;
        break; 
    }

    this.createTask.emit(this.showCreateTaskForm)
  }


}
