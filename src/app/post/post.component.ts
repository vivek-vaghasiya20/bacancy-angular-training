import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../interface/post-interface';
import { PostService } from '../service/post.service';
import { TmplAstHoverDeferredTrigger } from '@angular/compiler';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
    });
    this.postService.posts$.subscribe((posts) => {
      this.posts = posts;
    });
  }

  public likePost(postId: string, likeCount: number): void {
    this.postService.likePost(postId, likeCount);
  }

  public deletePost(postId: string): void {
    this.postService.deletePost(postId);
  }
}
