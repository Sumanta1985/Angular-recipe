import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() shoppingEditClicked=new EventEmitter<{}>(); 

  constructor() { }

  ngOnInit() {
  }

  onClick(name,amount){
    this.shoppingEditClicked.emit({name:name.value,amount:amount.value});
  }

}
