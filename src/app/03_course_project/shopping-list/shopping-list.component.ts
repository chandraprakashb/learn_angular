import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.mdel';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingredients[] = [
    new Ingredients('Apple',10),
    new Ingredients('Tomato',10)
  ] 
}
