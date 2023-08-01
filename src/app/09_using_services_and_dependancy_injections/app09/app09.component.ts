import { Component,OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-app09',
  templateUrl: './app09.component.html',
  styleUrls: ['./app09.component.css'],
  providers:[AccountService]
})
export class App09Component implements OnInit  {

  accounts:{name:string,status:string}[] = []

  constructor(private accountService:AccountService){}

  ngOnInit(){
    this.accounts = this.accountService.accounts
  }

}
