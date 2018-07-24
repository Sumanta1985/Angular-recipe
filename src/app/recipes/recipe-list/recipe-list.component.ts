import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[];
  @Output() recipeItem=new EventEmitter<Recipe>();

  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipe();
  }

  onClick(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
