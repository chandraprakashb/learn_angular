import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverId     = '10';
  serverStatus = "Offline";
  allowAddServer = false
  serverStatusText = "No Server was created !";
  serverName  = '';
  serverAdded = false;

  servers = ['Testserver 1','Testserver 2',];
  constructor() {
      setTimeout(()=>{
          this.allowAddServer = true;
      },2000)
  }

  getServerStatus(){
      this.serverStatus = Math.random() > 0.5 ? "online": "offline";
      return this.serverStatus;
  }

  onCreateServer(){
      this.serverAdded = true;
      this.serverStatusText = "Server has been created successfully !"
      this.servers.push(this.serverName);

      console.log(this.servers);
  } 

  onUpdateServerName(event:Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }


  getColor(){
      return this.serverStatus==='online' ? "green":"red";
  }

}
