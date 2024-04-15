import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { post } from '../interface/interface';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.scss'],
})
export class SocialFeedComponent implements OnInit, OnDestroy {
  public postList: post[] = [];
  private postSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.postSubscription = this.dataService
      .getPostUpdates()
      .subscribe((posts) => {
        this.postList = posts;
      });
  }

  public likePost(postId: number): void {
    this.dataService.likePost(postId);
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

  public stopAddingPosts(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
