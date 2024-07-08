import { createAction, props } from '@ngrx/store';
import { Post } from './grid.state';

export const loadPosts = createAction('[Post] Load Posts');
export const loadPostsSuccess = createAction('[Post] Load Posts Success', props<{ posts: Post[] }>());
export const loadPostsFailure = createAction('[Post] Load Posts Failure', props<{ error: any }>());

export const updateFilter = createAction('[User] Update Filter', props<{ filter: string }>());

export const addPost = createAction('[Post] Add Post', props<{ post: Post }>());
export const addPostSuccess = createAction('[Post] Add Post Success', props<{ posts: Post }>());
export const addPostFailure = createAction('[Post] Add Post Failure', props<{ error: any }>());