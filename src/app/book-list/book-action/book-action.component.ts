import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
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
  @ViewChild('btnClose') btnClose!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.book) {
      this.newBook = { ...this.book };
    }
  }

  public addBook(): void {
    if (this.validations()) {
      this.bookAdded.emit(this.newBook);
      this.btnClose.nativeElement.click();
      alert('Book added successfully');
      this.resetForm();
    }
  }

  public validations() {
    if (
      !this.newBook.title ||
      !this.newBook.description ||
      !this.newBook.imgUrl ||
      !this.newBook.price ||
      !this.newBook.review ||
      !this.newBook.stock ||
      !this.newBook.price
    ) {
      alert('please fill all the fields');
      return false;
    }

    if (+this.newBook.rating < 0 || this.newBook.rating > 5) {
      alert('Enter valid rating');
      this.newBook.rating = 0;
      return false;
    }
    if (+this.newBook.price < 0 || this.newBook.stock < 0) {
      alert('Price and stock should not be negative');
      return false;
    }
    return true;
  }

  public updateBook(): void {
    if (this.validations()) {
      this.bookEdited.emit(this.newBook);
      this.btnClose.nativeElement.click();
      alert('Book edited successfully');
      this.resetForm();
    }
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
