import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { post } from '../interface/interface';

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.scss'],
})
export class SocialFeedComponent {
  public postList: post[] = [
    {
      postId: 1,
      title: 'Post Title 1',
      description: 'Post Description 1',
      likeCount: 0,
    },
    {
      postId: 2,
      title: 'Post Title 2',
      description: 'Post Description 2',
      likeCount: 0,
    },
  ];

  public likePost(postId: number) {
    const postToUpdate = this.postList.find((post) => post.postId === postId);
    if (postToUpdate) {
      postToUpdate.likeCount++;
    }
  }
}
