import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interface/post-interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  public post: Post = {
    postId: 0,
    title: '',
    description: '',
  };
  private isSaveValue: boolean = false;
  constructor(private postService: PostService, private router: Router) {}

  public createPost(): void {
    if (this.post.description !== '' && this.post.title !== '') {
      this.postService.createPost(this.post);
      this.isSaveValue = true;
      alert('New Post Created');
      this.post = {
        postId: 0,
        title: '',
        description: '',
      };
      this.router.navigate(['posts']);
    } else {
      alert('Please Enter Your Post Data ');
    }
  }

  public hasUnsavedValues(): boolean {
    return this.isSaveValue;
  }
}
