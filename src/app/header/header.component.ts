import { Component, OnInit,EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit{
    constructor() {
        
    }

    ngOnInit(){

    }

    @Output() onClickEvent=new EventEmitter<{clickCategory:string}>();         

    onClick(feature:string){
            this.onClickEvent.emit({clickCategory:feature});
    }
}
