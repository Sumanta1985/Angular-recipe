import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  ingredients:Ingredients[]=[new Ingredients('Apple',5),
    new Ingredients('Orange', 2)];

  shoppingListEdit(list){
    this.ingredients.push(new Ingredients(list.name,list.amount));
  }
}
