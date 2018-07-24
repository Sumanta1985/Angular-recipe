import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {

  id:number;
  isEdit:boolean;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((param:Params)=>{
      this.id=param['id'];
      if (this.id!=null){
        this.isEdit=true;
      }
      console.log("isEdit",this.isEdit);
    });
  }

}
