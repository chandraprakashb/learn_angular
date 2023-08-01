import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-assignment09',
  templateUrl: './assignment09.component.html',
  styleUrls: ['./assignment09.component.css'],
  providers:[UserService]
})
export class Assignment09Component {
  activeUsers:string[]   = [];
  inactiveUsers:string[] = [];
  
  constructor(private userService:UserService) {
    this.activeUsers = this.userService.activeUsers
    this.inactiveUsers = this.userService.activeUsers
  }

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // } 
}
