import { Component, EventEmitter, Input, Output } from '@angular/core';
import { book } from '../interface/interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() public book!: book;

  @Output() notifyBookEvent: EventEmitter<string> = new EventEmitter<string>();

  public onNotifyBookEvent(): void {
    this.notifyBookEvent.emit(this.book.title);
  }
}
