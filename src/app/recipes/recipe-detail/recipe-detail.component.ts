import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Ingredients } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shoppingList.service';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  item:Recipe;
  id:number;
  
  constructor(private shoppingListService:ShoppingListService,private recipeService:RecipeService,private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params:Params)=>{
      this.id=+params['id'];
      this.item=this.recipeService.getIndivRecipe(this.id);
    });
  }

  onClick(ingredients:Ingredients[]){
    this.shoppingListService.recipeToShoppingList(ingredients);
  }

  onEditClick(){
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
