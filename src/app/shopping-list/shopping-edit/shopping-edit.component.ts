import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  shoppingItem:object;
  @Output() shoppingEditClicked=new EventEmitter<{}>(); 

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onClick(name,amount){
    // this.shoppingEditClicked.emit({name:name.value,amount:amount.value});
    this.shoppingItem={
      name:name.value,
      amount:amount.value
    }
    this.shoppingListService.addShoppingList(this.shoppingItem);
  }

}
