import { Directive, ElementRef, inject } from "@angular/core";

@Directive({
  selector: '[colo]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class ColorDirective {
  private el = inject(ElementRef);
  // constructor(Element: ElementRef) {
  //   return Element.nativeElement.style.color = "blue";
  // }

  onMouseEnter() {
    this.highlight("red");
  }

  onMouseLeave() {
    this.highlight("blue");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}