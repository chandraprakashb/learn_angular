import { Component } from '@angular/core';

@Component({
  selector: 'app-app05',
  templateUrl: './app05.component.html',
  styleUrls: ['./app05.component.css']
})

export class App05Component {
  serverElements:any[] = [
    {type:"server",name:"Test Server 1",content:"Just Test"},
    {type:"server",name:"Test Server 2",content:"Just Test"},
  ];

  constructor() {}

  onServerAdded(serverInfo:{name:string,content:string}){
    this.serverElements.push({
      type:"server",
      name:serverInfo.name,
      content:serverInfo.content
    })
  }

  onBluePrintAdded(blueprintInfo:{name:string,content:string}){
    this.serverElements.push({
      type:"blueprint",
      name:blueprintInfo.name,
      content:blueprintInfo.content
    });
  }

}
