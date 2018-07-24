import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients:Ingredients[];

  constructor(private shoppingListService:ShoppingListService,private recipeService:RecipeService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getShoppingList();
    this.shoppingListService.ingredientsAdded
    .subscribe((ingredients:Ingredients[])=>{
      this.ingredients=ingredients;
    });
  }
  
  // shoppingListEdit(list){
  //   this.ingredients.push(new Ingredients(list.name,list.amount));
  // }
}
