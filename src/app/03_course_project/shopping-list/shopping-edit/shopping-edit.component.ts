import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.mdel';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent {
  @Output() addIngredient = new EventEmitter<Ingredients>();
  @ViewChild('nameIput')  nameIput:ElementRef;
  @ViewChild('amountIput')  amountIput:ElementRef;

  onAddIngredients(){
    this.addIngredient.emit(new Ingredients(
      this.nameIput.nativeElement.value,
      parseInt(this.amountIput.nativeElement.value)
      ))
  }


}