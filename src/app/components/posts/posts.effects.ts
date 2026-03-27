import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadPosts, loadPostsSuccess } from "./state/post.actions";
import { exhaustMap, map, of } from "rxjs";
import { WorkoutService } from "../../services/workout/workout-service";

@Injectable()
export class PostsEffects {
    action$ = inject(Actions);

    constructor(private workoutService: WorkoutService) {}

    getPosts$ = createEffect(() =>
        this.action$.pipe(
            ofType(loadPosts),
            exhaustMap(() =>
                this.workoutService.getPosts().pipe(
                    map((posts: any) => 
                        loadPostsSuccess({posts})
                    )
                )
            )
        )
    )

}

