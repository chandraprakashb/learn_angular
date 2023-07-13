import { Component } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.mdel';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent {
  ingredients:Ingredients[] =[
    new Ingredients('Apple',  10),
    new Ingredients('Tomato', 10)
  ] 
}