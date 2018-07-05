import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeItem=new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  recipes: Recipe[] = [new Recipe('A Test Recipe', 'This is simply a test',
    'http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg','orange'),
  new Recipe('2nd Test Recipe', 'Another test recipe',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8Ou8ofyfDQcO5HyUm185KpBK2ArZERoFJFTviIgrzPv_DGjI','apple')
  ];

  onItemClick(recipe){
    this.recipeItem.emit(recipe);
  }
}
