import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostComponent, CreatePostComponent],
  imports: [CommonModule, PostRoutingModule, FormsModule],
})
export class PostModule {}
