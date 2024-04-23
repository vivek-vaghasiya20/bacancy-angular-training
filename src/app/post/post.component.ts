import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post-interface';
import { PostService } from '../service/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.posts = this.route.snapshot.data['data'];
  }
}
