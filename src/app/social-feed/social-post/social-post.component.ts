import { Component, EventEmitter, Input, Output } from '@angular/core';
import { post } from 'src/app/interface/interface';

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.scss'],
})
export class SocialPostComponent {
  @Input() post!: post;

  @Output() likeEvent: EventEmitter<number> = new EventEmitter<number>();

  public likePost(): void {
    this.likeEvent.emit(this.post.postId);
  }
}
