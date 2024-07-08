import { createReducer, on } from '@ngrx/store';
import { postsAdapter, initialPostsState } from './grid.state';
import * as PostActions from './grid.actions';

export const postsReducer = createReducer(
  initialPostsState,
  on(PostActions.loadPostsSuccess, (state, { posts }) => {
    return postsAdapter.setAll(posts, state);
  }),
  on(PostActions.updateFilter, (state, { filter }) => {
    return { ...state, filter };  // Actualiza el filtro en el estado
  }),
  on(PostActions.addPostSuccess, (state, { posts }) => {
    return postsAdapter.addOne(posts, state);
  })
  // Puedes manejar otras acciones como fallos o actualizaciones si es necesario
);
