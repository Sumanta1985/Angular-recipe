import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  @Input() recipeItem:Recipe;
  @Input() index:number;
  
  onItemClick(){
    this.router.navigate(['/recipe',this.index]);
  }
    
}
