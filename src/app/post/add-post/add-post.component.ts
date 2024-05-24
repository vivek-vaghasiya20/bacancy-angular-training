import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewContainerRefDirective } from 'src/app/directives/view-container-ref.directive';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/services/post.service';
import { AlertBoxComponent } from '../alert-box/alert-box.component';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  @ViewChild(ViewContainerRefDirective, { static: false })
  viewContainerHost!: ViewContainerRefDirective;
  public postForm!: FormGroup;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public addPost(): void {
    const post: Post = {
      title: this.postForm.get('title')?.value,
      userId: 1,
      id: 101,
      body: this.postForm.get('description')?.value,
    };
    this.postService.createPost(post).subscribe({
      next: (post) => {
        if (post) {
          this.viewContainerHost.viewContainerRef.clear();
          const alertComponentRef =
            this.viewContainerHost.viewContainerRef.createComponent(
              AlertBoxComponent
            );
          alertComponentRef.instance.alertMessage = 'Post added Successfully';
          const closeAlertSub$ = alertComponentRef.instance.close.subscribe(
            () => {
              closeAlertSub$.unsubscribe();
              this.viewContainerHost.viewContainerRef.clear();
            }
          );
        }
      },
      error: (error) => {
        this.viewContainerHost.viewContainerRef.clear();
        const alertComponentRef =
          this.viewContainerHost.viewContainerRef.createComponent(
            AlertBoxComponent
          );
        alertComponentRef.instance.alertMessage =
          'opps! something went wrong. Post can not added.';
        const closeAlertSub$ = alertComponentRef.instance.close.subscribe(
          () => {
            closeAlertSub$.unsubscribe();
            this.viewContainerHost.viewContainerRef.clear();
          }
        );
      },
    });
    this.postForm.reset();
  }
}
