import { Component,Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent {
 @Input() recipe:Recipe;
  @Output() recipeSelected = new EventEmitter<void>()

  onRecipeSelected(){
    this.recipeSelected.emit()
  }

}
