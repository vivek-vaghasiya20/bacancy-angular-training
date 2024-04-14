import { Component, EventEmitter, Output } from '@angular/core';
import { book } from 'src/app/book-interface';

@Component({
  selector: 'app-book-action',
  templateUrl: './book-action.component.html',
  styleUrls: ['./book-action.component.scss'],
})
export class BookActionComponent {
  public newBook: book = {
    bookId: 0,
    imgUrl: '',
    title: '',
    description: '',
    price: 0,
    review: '',
    rating: 0,
    stock: 0,
  };

  @Output() bookAdded = new EventEmitter<book>();
  //@Output() deleteBook = new EventEmitter<book>();

  public addBook(): void {
    this.bookAdded.emit(this.newBook);
    this.resetForm();
  }
  public deleteBook(): void {
    // this.deleteBook.emit(this.deleteBook);
  }

  public resetForm(): void {
    this.newBook = {
      bookId: 0,
      imgUrl: '',
      title: '',
      description: '',
      price: 0,
      review: '',
      rating: 0,
      stock: 0,
    };
  }
}
