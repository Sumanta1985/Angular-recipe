import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipes.model";
import { Ingredients } from "../shared/ingredient.model";

export class RecipeService{
  
  // toShoppingList=new EventEmitter<Ingredients[]>();
  recipeSelected=new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Mustard Fish Curry Recipe-Sarse Bata Maach-Indian Fish Curry Recipe-Fish Recipe', 'This is simply a test description',
    'https://i.ytimg.com/vi/NBaFbfdlZXU/maxresdefault.jpg',
    [new Ingredients('Bata Maach','5'),
     new Ingredients('Chilly','10')]),
    new Recipe('Ilish Bhapa Recipe "Bengali Style"', 'Another test recipe description',
    'https://s-media-cache-ak0.pinimg.com/originals/58/95/85/589585bd9d92fb6ef5151980daab5d87.jpg',
    [new Ingredients('Ilis Maach','2'),
     new Ingredients('Mustard','20')])
  ];

  getRecipe(){
      return this.recipes.slice();
  }

  getIndivRecipe(id){
    return this.recipes[id];
  }
}