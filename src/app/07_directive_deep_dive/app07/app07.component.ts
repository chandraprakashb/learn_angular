import { Component } from '@angular/core';

@Component({
  selector: 'app-app07',
  templateUrl: './app07.component.html',
  styleUrls: ['./app07.component.css']
})
export class App07Component {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers  = [1,3,5]
  evenNumbers = [2,4]
  onlyOdd = false;
  value = 5;
}
