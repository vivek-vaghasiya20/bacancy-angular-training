import { Injectable } from '@angular/core';
import { post } from './interface/interface';
import { Observable, interval, map, startWith, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private postList: post[] = [];

  constructor() {
    this.initializePosts();
  }

  private initializePosts(): void {
    this.postList = [
      {
        postId: 1,
        title: 'Post title 1',
        description: 'Post Description 1',
        likeCount: 0,
      },
      {
        postId: 2,
        title: 'Post title 2',
        description: 'Post Description 2',
        likeCount: 0,
      },
    ];
  }

  getPostUpdates(): Observable<post[]> {
    return interval(5000).pipe(
      startWith(this.postList.slice()),
      map(() => {
        const newPostId = this.postList.length + 1;
        const newPost: post = {
          postId: newPostId,
          title: `Post title ${newPostId}`,
          description: `Post Description ${newPostId}`,
          likeCount: 0,
        };
        this.postList.push(newPost);
        return this.postList.slice();
      })
    );
  }

  likePost(postId: number): void {
    const postToUpdate = this.postList.find((post) => post.postId === postId);
    if (postToUpdate) {
      postToUpdate.likeCount++;
    }
  }
}
