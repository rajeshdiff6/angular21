import { Component } from "@angular/core";
import { concatMap, forkJoin } from "rxjs";
import { WorkoutService } from "../../services/workout/workout-service";

@Component({
    selector: "app-rxjs",
    templateUrl: "./rxjs-component.html"
})
export class RxjsComponent {
    constructor(private workoutService: WorkoutService) {}
    callForkJoin() {
        forkJoin([this.workoutService.getPosts(), this.workoutService.getUsers(), this.workoutService.getCompanies()]).subscribe({
            next: (response) => console.log(response),
            error: (error) => console.log(error)
        });
    }

    callConcatMap() {
        this.workoutService.getCompanies().pipe(
            concatMap((companies) => {console.log(companies);
                return this.workoutService.getPosts().pipe(
                    concatMap((posts) => {console.log(posts);
                        return this.workoutService.getUsers();
                    })
                );
            })
        ).subscribe({
            next: (response) => {
                console.log(response);
            },
            error: (error) => console.log(error),
            complete: () => console.log("completed")
        });
    }
}