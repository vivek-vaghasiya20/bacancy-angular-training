import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Post } from '../interface/post-interface';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class PostResolverService implements Resolve<Post[]> {
  constructor(private postService: PostService) {}

  public resolve(): Post[] {
    return this.postService.getAllPost();
  }
}
