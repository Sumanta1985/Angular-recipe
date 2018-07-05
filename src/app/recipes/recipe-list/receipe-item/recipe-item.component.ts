import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  @Input() recipeItem:Recipe;

  // @Output() itemClicked=new EventEmitter<{name:string,description:string,image:string,ingredients:string}>();
  @Output() itemClicked=new EventEmitter<void>();
  
  clickItem(){
    // this.itemClicked.emit({name:items.name,description:items.description,image:items.image,ingredients:items.ingredients});
    this.itemClicked.emit();
  }
  
}
