export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface Posts {
    posts: Post[],
    loading: boolean
}

export const initialstate: Posts = {
    posts: [],
    loading: false
}