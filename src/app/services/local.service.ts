import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { Post } from '../gridReduxConfig/grid.state';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + '/Posts');
  }

  getPostsFilter(name: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + '/Posts/filter?=name' + name);
  }

  addPost(posts: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + '/Posts', posts);
  }
}
