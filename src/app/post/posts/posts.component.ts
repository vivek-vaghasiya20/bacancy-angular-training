import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewContainerRefDirective } from 'src/app/directives/view-container-ref.directive';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/services/post.service';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { AlertBoxComponent } from '../alert-box/alert-box.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts: Post[] = [];

  @ViewChild(ViewContainerRefDirective, { static: false })
  viewContainerHost!: ViewContainerRefDirective;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (res) => {
        this.posts = res;
      },
      error: (error) => {
        this.viewContainerHost.viewContainerRef.clear();
        const alertComponentRef =
          this.viewContainerHost.viewContainerRef.createComponent(
            AlertBoxComponent
          );
        alertComponentRef.instance.alertMessage = 'Error while fetching post.';
        const closeAlertSub$ = alertComponentRef.instance.close.subscribe(
          () => {
            closeAlertSub$.unsubscribe();
            this.viewContainerHost.viewContainerRef.clear();
          }
        );
      },
    });
  }

  private onDeletePost(id: number): void {
    this.postService.deletePost(id).subscribe({
      next: () => {
        this.viewContainerHost.viewContainerRef.clear();
        const alertComponentRef =
          this.viewContainerHost.viewContainerRef.createComponent(
            AlertBoxComponent
          );
        alertComponentRef.instance.alertMessage = 'Post deleted Successfully';
        const closeAlertSub$ = alertComponentRef.instance.close.subscribe(
          () => {
            closeAlertSub$.unsubscribe();
            this.viewContainerHost.viewContainerRef.clear();
          }
        );
      },
      error: (error) => {
        this.viewContainerHost.viewContainerRef.clear();
        const alertComponentRef =
          this.viewContainerHost.viewContainerRef.createComponent(
            AlertBoxComponent
          );
        alertComponentRef.instance.alertMessage =
          'Error while deleting the post.';
        const closeAlertSub$ = alertComponentRef.instance.close.subscribe(
          () => {
            closeAlertSub$.unsubscribe();
            this.viewContainerHost.viewContainerRef.clear();
          }
        );
      },
    });
  }

  public showConfirmDelete(id: number) {
    if (this.viewContainerHost.viewContainerRef.length === 0) {
      const confirmComponent =
        this.viewContainerHost.viewContainerRef.createComponent(
          ConfirmBoxComponent
        );

      const successSub = confirmComponent.instance.succeeded.subscribe(() => {
        this.onDeletePost(id);
        successSub.unsubscribe();
        this.viewContainerHost.viewContainerRef.clear();
      });

      const cancelSub = confirmComponent.instance.cancelled.subscribe(() => {
        cancelSub.unsubscribe();
        this.viewContainerHost.viewContainerRef.clear();
      });
    }
  }
}
