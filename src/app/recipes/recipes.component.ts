import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  Ritem:Recipe;
  
  constructor() { }

  ngOnInit() {
  }

  // showdetail(event){
  //   this.Ritem.name=event.name;
  //   this.Ritem.description=event.description;
  //   this.Ritem.image=event.image;
  //   this.Ritem.ingredients=event.ingredients
  // }

}
