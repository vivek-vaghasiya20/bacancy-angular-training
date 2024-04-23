import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PostService } from './post.service';
import { Observable } from 'rxjs';
import { Post } from '../interface/post-interface';

@Injectable({
  providedIn: 'root',
})
export class PostResolverService implements Resolve<any> {
  constructor(private postService: PostService) {}

  public resolve(): Post[] {
    return this.postService.getAllPost();
  }
}
