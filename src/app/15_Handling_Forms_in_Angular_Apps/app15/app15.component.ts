import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-app15',
  templateUrl: './app15.component.html',
  styleUrls: ['./app15.component.css']
})
export class App15Component {

  @ViewChild('f') form:ElementRef<HTMLFormElement>;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  //   console.log(form.value);

  // }

  onSubmit(){
    console.log(this.form);
    
  }
}
