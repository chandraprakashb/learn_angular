import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App09Component } from './app09/app09.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { Assignment09Component } from './assignment09/assignment09.component';
import { InactiveUsersComponent } from './assignment09/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './assignment09/active-users/active-users.component';


@NgModule({
  declarations: [
    App09Component,
    NewAccountComponent,
    AccountComponent,
    Assignment09Component,
    InactiveUsersComponent,
    ActiveUsersComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[],
  exports:[App09Component,Assignment09Component]
})

export class ServiceAndDependancyInjectionModule { }