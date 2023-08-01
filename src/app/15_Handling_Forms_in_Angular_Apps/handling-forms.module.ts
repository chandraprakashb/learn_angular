import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App15Component } from './app15/app15.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    App15Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[App15Component]
})
export class HandlingFormsModule { }
