import { Component,ElementRef,EventEmitter,Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated               = new EventEmitter<{name:string,content:string}>()
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name:string,content:string}>()
  // newServerName    = '';
  // newServerContent = '';
  @ViewChild('serverCotentInput') serverContentInput: ElementRef ;

  onAddServer(serverNameInput:HTMLInputElement) {
    this.serverCreated.emit({name:serverNameInput.value,content:this.serverContentInput.nativeElement.value,})
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.blueprintCreated.emit({ name:serverNameInput.value, content:this.serverContentInput.nativeElement.value, })
  }
}
