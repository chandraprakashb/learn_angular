import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('Recipe 1','Lorem ipsum Deolre sit amet!',"https://cdn.imgbin.com/6/1/14/imgbin-recipe-cooking-chef-dish-food-cooking-Zp7NcJCQt7fhEgHNx2NyVg18r.jpg"),
    new Recipe('Recipe 2','Lorem ipsum Deolre sit amet!',"https://cdn.imgbin.com/6/1/14/imgbin-recipe-cooking-chef-dish-food-cooking-Zp7NcJCQt7fhEgHNx2NyVg18r.jpg"),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>()

  onRecipeSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

}
