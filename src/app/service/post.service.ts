import { Injectable } from '@angular/core';
import { Post } from '../interface/post-interface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private connectionURL: string =
    'https://httpdemo-44694-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';

  private postsSubject: Subject<Post[]> = new Subject<Post[]>();
  posts$: Observable<Post[]> = this.postsSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getAllPosts(): Observable<Post[]> {
    return this.httpClient
      .get<{ [key: string]: Post }>(this.connectionURL)
      .pipe(
        map((response) => {
          let postList: Post[] = [];
          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              postList.push({ ...response[key], id: key });
            }
          }
          this.postsSubject.next(postList);
          return postList;
        })
      );
  }

  public createPost(post: Post): void {
    this.httpClient.post(this.connectionURL, post).subscribe((Response) => {
      this.getAllPosts().subscribe();
    });
  }

  public likePost(postId: string, likeCount: number) {
    this.httpClient
      .patch(
        `https://httpdemo-44694-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${postId}.json`,
        { likeCount: likeCount + 1 }
      )
      .subscribe(() => this.getAllPosts().subscribe());
  }

  public deletePost(postId: string) {
    this.httpClient
      .delete(
        `https://httpdemo-44694-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${postId}.json`
      )
      .subscribe(() => {
        this.getAllPosts().subscribe();
      });
  }
}
