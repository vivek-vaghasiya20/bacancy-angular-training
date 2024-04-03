import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { book } from '../interface/interface';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BookAddComponent {
  @ViewChild('bookNameRef') bookName!: ElementRef;
  @ViewChild('bookAuthorNameRef') bookAuthorName!: ElementRef;
  public bookPrice: number = 0;

  @Output() addBookEvent: EventEmitter<book> = new EventEmitter<book>();

  public onAddBookEvent(
    bookPriceRef: HTMLInputElement,
    bookDescriptionRef: HTMLTextAreaElement
  ): void {
    this.bookPrice = +bookPriceRef.value;
    this.addBookEvent.emit({
      title: this.bookName.nativeElement.value,
      author: this.bookAuthorName.nativeElement.value,
      price: this.bookPrice,
      description: bookDescriptionRef.value,
    });
  }
}
