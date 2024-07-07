import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(public ele: ElementRef) { }

  @HostListener('click') onClick() {
    this.ele.nativeElement.style.color = 'red';
    this.ele.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMousemove() {
    this.ele.nativeElement.style.color ='purple';
  }
  
  @HostListener('mouseout') onMouseout() {
    this.ele.nativeElement.style.color ='black';
  }

}