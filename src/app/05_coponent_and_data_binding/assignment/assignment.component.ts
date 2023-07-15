import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  counts:any[] = [];
  onEventStart(intervalStared:boolean){
    this.counts.push(this.counts.length);
    console.log(this.counts);
    
  }

}
