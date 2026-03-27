import { UpperCasePipe } from "@angular/common";
import { Component, ElementRef, EventEmitter, inject, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { fromEvent } from "rxjs";
import { WorkoutPipe } from "../../pipes/workout-pipe";

@Component({
    selector: "app-workout",
    styleUrl: "./workout.scss",
    templateUrl: "./workout.html",
    host: {
        '(click)': 'onSingleClick()'
    },
    imports: [FormsModule, UpperCasePipe, WorkoutPipe]
})
export class Workout {
    @Input() title = "";
    @Output() sendValue = new EventEmitter<string>();
    private element = inject(ElementRef);
    public body = "";
    street = "";
    a = 10;
    b = 2;
    fruits = ["apple", "banana", "pomogranate"];

    onSingleClick() {
        this.element.nativeElement.style.color = "blue";
    }

    ngAfterViewInit() {
        const messageEle = document.getElementById("message");
        if (messageEle) {
            const messageObservable$ = fromEvent(messageEle, 'click');

            messageObservable$.subscribe(() => {
                this.sendValue.emit("ha ha ha");
            });
        }
    }
}