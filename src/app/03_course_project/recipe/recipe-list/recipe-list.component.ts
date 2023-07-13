import { Component } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('Recipe 1','Lorem ipsum Deolre sit amet!',"https://www.washingtonpost.com/resizer/gAqD0qui8pBZT1HcvLXlpKWU1rY=/arc-anglerfish-washpost-prod-washpost/public/VRR6IGG37LD57PIPDASAGEPHEY.jpg"),
    new Recipe('Recipe 2','Lorem ipsum Deolre sit amet!',"https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/healthy-sunday-roast-chicken.jpg"),
  ];
}
