import { Ingredients } from "../shared/ingredient.model";
import { EventEmitter, Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";


export class ShoppingListService{
    ingredientsAdded=new EventEmitter<Ingredients[]>();

    private ingredients:Ingredients[]=[new Ingredients('Apple','5'),
      new Ingredients('Orange', '2')];  

    constructor(){

    }

    getShoppingList(){
        return this.ingredients.slice();
    }

    addShoppingList(item){
        this.ingredients.push(new Ingredients(item.name,item.amount));
        this.ingredientsAdded.emit(this.ingredients.slice());
    }

    recipeToShoppingList(ingredients){
        this.ingredients.push(...ingredients);
    }

    // this.recipeService.toShoppingList
    // .subscribe((ingredients:Ingredients[])=>{
    //   this.ingredients.push(...ingredients);
    // });
}