import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent, CreatePostComponent],
  imports: [CommonModule, PostRoutingModule, FormsModule],
})
export class PostModule {}
