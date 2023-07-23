import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SuccessAlert } from './assignment1/success-alert/success.alert.component';
import { WarningAlertComponent } from './assignment1/warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { Assignment2Component } from './assignment2/assignment2.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment3Component } from './assignment3/assignment3.component';

import { CourserProjectModule_03 } from './03_course_project/course-project.module';
import { ComponentAndDataBinding } from './05_coponent_and_data_binding/component-and-databinding.module';
import { TaskManagementSystemModule } from './task-management-system/task-management-system.module';
import { DirectiveDeepDiveModule } from './07_directive_deep_dive/directive-deep-dive.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RowCssComponent } from './table/ngx-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,

    // Assingment 1
    SuccessAlert,
    WarningAlertComponent,

    // Assingment 2
    Assignment2Component,
    Assignment3Component,
    RowCssComponent

  ],
  imports: [
    BrowserModule,FormsModule,

    // Course Project Modules Modules
    CourserProjectModule_03,
    ComponentAndDataBinding,
    TaskManagementSystemModule,
    DirectiveDeepDiveModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
