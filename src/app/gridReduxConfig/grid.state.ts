import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface Post {
    id: string;      
    nombre: string;    
    descripcion: string;  
  }

export interface PostState extends EntityState<Post> {
  filter: string;
}
export const postsAdapter = createEntityAdapter<Post>();
export const initialPostsState: PostState = postsAdapter.getInitialState({
  filter: ''
});