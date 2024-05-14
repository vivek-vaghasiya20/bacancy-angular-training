import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { book } from 'src/app/book-interface';

@Component({
  selector: 'app-book-action',
  templateUrl: './book-action.component.html',
  styleUrls: ['./book-action.component.scss'],
})
export class BookActionComponent {
  @Input() book: book | undefined;
  public newBook: book = {
    bookId: 0,
    imgUrl: 'assets/book-image.jpeg',
    title: '',
    description: '',
    price: 0,
    review: '',
    rating: 0,
    stock: 0,
  };
  @Input() isEditMode: boolean | undefined;
  @Output() bookAdded = new EventEmitter<book>();
  @Output() bookEdited = new EventEmitter<book>();

  ngOnChanges(changes: SimpleChanges): void {
    if (this.book) {
      this.newBook = { ...this.book };
    }
  }

  public addBook(): void {
    if (this.validForm() && this.validatePrice()) {
      this.bookAdded.emit(this.newBook);
      this.resetForm();
    } else {
      alert('Please fill up all field or enter valid values.');
      this.resetForm();
    }
  }

  public updateBook(): void {
    if (this.validForm() && this.validatePrice()) {
      this.bookEdited.emit(this.newBook);
      this.resetForm();
    } else {
      alert('Please fill up all field or enter valid values.');
    }
  }

  private validForm(): boolean {
    return (
      this.newBook.title.trim() !== '' &&
      this.newBook.description.trim() !== '' &&
      this.newBook.imgUrl.trim() !== '' &&
      this.newBook.price !== null &&
      this.newBook.review.trim() !== '' &&
      this.newBook.rating !== null &&
      this.newBook.stock !== null
    );
  }
  public validatePrice(): boolean {
    return this.newBook.price >= 0;
  }

  public resetForm(): void {
    this.newBook = {
      bookId: 0,
      imgUrl: 'assets/book-image.jpeg',
      title: '',
      description: '',
      price: 0,
      review: '',
      rating: 0,
      stock: 0,
    };
    this.isEditMode = false;
  }
}
