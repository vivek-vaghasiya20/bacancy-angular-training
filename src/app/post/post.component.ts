import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../interface/post-interface';

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
