import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from '../interface/post.inteface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiURL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<post[]> {
    return this.http.get<post[]>(`${this.apiURL}/posts`);
  }

  public getPostsById(id: number): Observable<post[]> {
    return this.http.get<post[]>(`${this.apiURL}/posts/${id}`);
  }

  public deletePost(id: number): Observable<{}> {
    return this.http.delete(`${this.apiURL}/posts/${id}`);
  }

  public createPost(post: post): Observable<post> {
    return this.http.post<post>(`${this.apiURL}/posts`, post);
  }

  public updatePost(id: number, post: post): Observable<post> {
    return this.http.put<post>(`${this.apiURL}/posts/${id}`, post);
  }
}
