import { Component, Input } from '@angular/core';
import { book } from 'src/app/book-interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() public book!: book;
}
