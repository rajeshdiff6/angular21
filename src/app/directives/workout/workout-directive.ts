import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[col]'
})
export class WorkoutDirective {
    constructor(private element: ElementRef) {
        element.nativeElement.style.color = "red";
    }
}