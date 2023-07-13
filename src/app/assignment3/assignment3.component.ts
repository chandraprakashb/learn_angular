import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  displayDetails = false;
  // clickCount = 0;
  // clickCounts:any[] = [];
  // Log Items
  logItems:any[] = [];
  onDisplayDetails(){
    this.displayDetails = this.displayDetails ? this.displayDetails=false:this.displayDetails=true;
    // this.clickCount++;
    // this.clickCounts.push(this.clickCount);
    // this.clickCounts.push(this.clickCounts.length +1);
    this.logItems.push(new Date())
  }
}
