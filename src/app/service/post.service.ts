import { Injectable } from '@angular/core';
import { Post } from '../interface/post-interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postList: Post[] = [];

  constructor() {
    this.initializePosts();
  }

  private initializePosts(): void {
    this.postList = [
      {
        postId: 1,
        title: 'Post title 1',
        description: 'Post Description 1',
      },
      {
        postId: 2,
        title: 'Post title 2',
        description: 'Post Description 2',
      },
    ];
  }

  public getAllPost(): Post[] {
    return this.postList;
  }

  public createPost(post: Post): void {
    post.postId = this.postList.length;
    this.postList.push(post);
  }
}
