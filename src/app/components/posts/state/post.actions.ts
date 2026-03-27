import { createAction, props } from "@ngrx/store";
import { Post } from "./post.state";

export const loadPosts = createAction(
    "Load Posts"
);
export const loadPostsSuccess = createAction(
    "Load Posts success",
    props<{ posts: Post[]}>()
);