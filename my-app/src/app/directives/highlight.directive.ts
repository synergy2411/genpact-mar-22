import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() favColor! : string;

  @HostBinding('style.backgroundColor') bgColor! : string;

  @HostListener("mouseenter")
  onmouseenter(){
    this.bgColor = this.favColor;
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
