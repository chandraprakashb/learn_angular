import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./loging.service";

@Injectable()

export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    constructor(private loggingService:LoggingService){}

    statusUpdate = new EventEmitter<string>();

    addAccount(name:string,status:string){
      this.accounts.push({name,status})
      this.loggingService.logStatusChange(status)
    }

    updateAccount(id:number,status:string){
      this.accounts[id].status = status; 
      this.loggingService.logStatusChange(status)
    }
}