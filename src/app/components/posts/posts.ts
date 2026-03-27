import { Component, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Post, Posts } from "./state/post.state";
import { postSelector } from "./state/post.selector";
import { Store } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { loadPosts } from "./state/post.actions";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.html',
    imports: [CommonModule]
})
export class PostsComponent {
    posts$!: Observable<Post[]>;
    constructor(private store: Store){}

    ngOninit() {
        this.posts$ = this.store.select(postSelector);
    }

    loadPosts() {
        this.store.dispatch(loadPosts());
    }
}