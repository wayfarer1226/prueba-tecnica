import { createSelector } from '@ngrx/store';
import { postsAdapter, PostState } from './grid.state';

export const selectPoststate = (state: { posts: PostState }) => state.posts;

export const { selectAll: selectAllPosts } = postsAdapter.getSelectors(selectPoststate);

export const selectFilter = createSelector(
    selectPoststate,
  (state: PostState) => state.filter
);

export const selectFilteredPosts = createSelector(
    selectAllPosts,
  selectFilter,
  (posts, filter) => posts.filter(posts => posts.nombre.toLowerCase().includes(filter.toLowerCase()))
);
