import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  constructor() { }
  
  @HostBinding('class.open') isOpen=false;  
 
  @HostListener('click') DropDown(){
    this.isOpen=!this.isOpen;
  }  

}
