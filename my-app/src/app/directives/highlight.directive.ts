import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bgColor! : string;

  @HostListener("mouseenter")
  onmouseenter(){
    this.bgColor = 'aqua';
  }

  @HostListener("mouseleave")
  onmouseleave(){
    this.bgColor = 'transparent';
  }

  // constructor(private elementRef : ElementRef) {
  //   // console.log(this.elementRef.nativeElement);
  //   this.elementRef.nativeElement.style.backgroundColor = 'lightgrey'
  //  }

}

// <div appHighlight></div>

// <div name="container"></div>

// div[name="container"]{ color : red}
