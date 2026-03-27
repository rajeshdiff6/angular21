import { createReducer, on, State } from "@ngrx/store";
import { initialstate } from "./state/post.state";
import { loadPosts, loadPostsSuccess } from "./state/post.actions";

export const postsReducer = createReducer(
    initialstate,
    on(loadPosts, state => ({
        ...state,
        loading: true
    })),
    on(loadPostsSuccess, (state, {posts}) => ({
        ...state,
        posts,
        loading: false
    }))
);