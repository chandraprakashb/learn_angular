import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Output() navigationLink = new EventEmitter<string>();

  onNavigate(link:string){
    this.navigationLink.emit(link);
  } 
  
}
