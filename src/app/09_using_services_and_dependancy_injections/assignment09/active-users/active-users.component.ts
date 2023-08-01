import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from '../../loging.service';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  activeUsers:any[] = []
  constructor(private userService:UserService) {
    console.log(this.userService.activeUsers);
  }

  onSetToInactive(id: number) {
    this.userService.setToInAative(id)
  }

  ngOnInit(){
    this.activeUsers = this.userService.activeUsers
  }

}
