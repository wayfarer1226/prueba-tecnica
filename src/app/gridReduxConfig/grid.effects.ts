import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PostActions from './grid.actions';
import { LocalService } from '../services/local.service';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPosts),
      mergeMap(() =>
        this.postService.getPosts().pipe(
          map(posts => PostActions.loadPostsSuccess({ posts })),
          catchError(error => of(PostActions.loadPostsFailure({ error })))
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.addPost),
      mergeMap(action =>
        this.postService.addPost(action.post).pipe(
          map(posts => PostActions.addPostSuccess({ posts })),
          catchError(error => of(PostActions.addPostFailure({ error })))
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private postService: LocalService
  ) {}
}
