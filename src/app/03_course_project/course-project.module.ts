import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App03Component } from './app03/app03.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe/recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    App03Component, 
    HeaderComponent, 
    RecipeComponent, 
    RecipeListComponent, 
    RecipeListItemComponent, 
    RecipeDetailComponent, 
    ShoppingEditComponent, 
    ShoppingListComponent, 
    DropdownDirective

  ],
  imports: [CommonModule],
  exports:[App03Component]
})

export class CourserProjectModule_03 { }
