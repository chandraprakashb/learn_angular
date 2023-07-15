import { Component } from '@angular/core';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  recipeDetail:Recipe;

  onRecipeSelected(recipe:Recipe){
    this.recipeDetail= recipe;
    
  }

}
