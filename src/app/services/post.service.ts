import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interface/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private requestURL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.requestURL}/posts`);
  }

  public deletePost(id: number): Observable<{}> {
    return this.http.delete(`${this.requestURL}/posts/${id}`);
  }

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.requestURL}/posts`, post);
  }
}
