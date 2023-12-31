import { Component} from '@angular/core';
import { LoggingService } from '../loging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private loggingService:LoggingService,private accountService:AccountService) {
    this.accountService.statusUpdate.subscribe((status)=>{
      alert("New Status "+ status)
    })
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus)
  }


}
