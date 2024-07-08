import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPosts, updateFilter, addPost } from './gridReduxConfig/grid.actions';
import { PostState, postsAdapter, Post } from './gridReduxConfig/grid.state';
import { selectFilteredPosts } from './gridReduxConfig/grid.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts$: Observable<Post[]>;
  newPost: Partial<Post> = { nombre: '', descripcion: '' };

  constructor(private store: Store<{ posts: PostState }>) {
    const { selectAll } = postsAdapter.getSelectors();
    this.posts$ = this.store.select(selectFilteredPosts);
  }
  ngOnInit(): void {
    try {
      this.store.dispatch(loadPosts());
    } catch (error) {
      console.log("error", error);
      
    }
  }

  onFilterChange(event: Event): void {
    const filter = (event.target as HTMLInputElement).value;
    this.store.dispatch(updateFilter({ filter }));
  }

  onAddPost(): void {
    const post: Post = {
      ...this.newPost
    } as Post;
    this.store.dispatch(addPost({ post }));
    this.newPost = { nombre: '', descripcion: '' };  // Reiniciar el formulario
  }
}
