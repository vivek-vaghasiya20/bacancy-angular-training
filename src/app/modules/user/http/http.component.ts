import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interface/post.inteface';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent {
  public posts: Post[] = [];
  public postId!: number;
  public postIdToDelete!: number;
  public postIdToUpdate!: number;
  public newPost: Post = {
    userId: 11,
    id: 101,
    title: 'New Post',
    body: 'New post created',
  };

  private subscription: Subscription[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    const postSubscription = this.httpService.getPosts().subscribe({
      next: (res) => {
        this.posts = res;
      },
      error: () => {
        Swal.fire('Error while fetching post.');
      },
    });
    this.subscription.push(postSubscription);
  }

  public onGetPostsById(id: number): void {
    const getPostSubscription = this.httpService.getPostsById(id).subscribe({
      next: () => {
        Swal.fire('Post fetched Successfully');
      },
      error: (err) => {
        let errorMessage = 'An error occurred while fetching the post';
        if (err.status === 500) {
          errorMessage = 'Internal server Error';
        } else if (err.status === 404) {
          errorMessage = 'Post not found';
        } else if (err.status === 400) {
          errorMessage = 'Bad Request';
        }
        Swal.fire(errorMessage);
      },
    });
    this.subscription.push(getPostSubscription);
  }

  public onDeletePost(id: number): void {
    const deletePostSubscription = this.httpService.deletePost(id).subscribe({
      next: () => {
        Swal.fire('Post deleted Successfully');
      },
      error: () => {
        Swal.fire('Error while deleting the post ');
      },
    });
    this.subscription.push(deletePostSubscription);
  }

  public onCreatePost(): void {
    const createPostSubscription = this.httpService
      .createPost(this.newPost)
      .subscribe({
        next: () => {
          Swal.fire('New Post created Successfully');
        },
        error: (err) => {
          let errorMessage = 'An error occurred while creating the post';
          if (err.status === 500) {
            errorMessage = 'Internal server Error';
          } else if (err.status === 404) {
            errorMessage = 'Post not found';
          } else if (err.status === 400) {
            errorMessage = 'Bad Request';
          }
          Swal.fire(errorMessage);
        },
      });
    this.subscription.push(createPostSubscription);
  }

  public onUpdatePost(id: number): void {
    const updatePostSubscription = this.httpService
      .updatePost(id, this.newPost)
      .subscribe({
        next: () => {
          Swal.fire('Post edited Successfully');
        },
        error: (err) => {
          let errorMessage = 'An error occurred while editing the post';
          if (err.status === 500) {
            errorMessage = 'Internal server Error';
          } else if (err.status === 404) {
            errorMessage = 'Post not found';
          } else if (err.status === 400) {
            errorMessage = 'Bad Request';
          }
          Swal.fire(errorMessage);
        },
      });
    this.subscription.push(updatePostSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
