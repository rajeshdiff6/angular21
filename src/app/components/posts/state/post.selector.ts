import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Posts } from "./post.state";

export const postsFeatureSelector = createFeatureSelector<Posts>("posts");

export const postSelector = createSelector(
    postsFeatureSelector,
    state => state.posts
);

export const selectLoading = createSelector(
    postsFeatureSelector,
    state => state.loading
);