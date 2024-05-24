import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostComponent } from './post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmBoxComponent } from './confirm-box/confirm-box.component';
import { ViewContainerRefDirective } from '../directives/view-container-ref.directive';
import { AlertBoxComponent } from './alert-box/alert-box.component';

@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent,
    PostComponent,
    ConfirmBoxComponent,
    ViewContainerRefDirective,
    AlertBoxComponent,
  ],
  imports: [CommonModule, PostRoutingModule, ReactiveFormsModule],
  exports: [PostsComponent, AddPostComponent, PostComponent],
})
export class PostModule {}
