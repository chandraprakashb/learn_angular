import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagementSystemComponent } from './root-task-management-system/task-management-system.component';
import { HeaderComponent } from './header/header.component';
import { TaskCountComponent } from './task-count/task-count.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { TaskService } from './shared/tasks.service';


@NgModule({
  declarations: [
    TaskManagementSystemComponent,
    HeaderComponent,
    TaskCountComponent,
    TasksContainerComponent,
    CreateTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[TaskManagementSystemComponent],
  providers:[TaskService]
})

export class TaskManagementSystemModule { }
