import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interface/post.inteface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiURL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiURL}/posts`);
  }

  public getPostsById(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiURL}/posts/${id}`);
  }

  public deletePost(id: number): Observable<{}> {
    return this.http.delete(`${this.apiURL}/posts/${id}`);
  }

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiURL}/posts`, post);
  }

  public updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiURL}/posts/${id}`, post);
  }
}
