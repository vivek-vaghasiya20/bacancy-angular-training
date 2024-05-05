import { Component, ViewChild } from '@angular/core';
import { book } from '../book-interface';
import { ConfirmDialogBoxComponent } from '../core/confirm-dialog-box/confirm-dialog-box.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  @ViewChild(ConfirmDialogBoxComponent)
  confirmation!: ConfirmDialogBoxComponent;
  public bookToDeleteId: number | undefined;
  public selectedBook: book | undefined;
  public isEditMode: boolean = false;
  public editBookIndex: number = -1;
  public bookList: book[] = [
    {
      bookId: 1,
      imgUrl: 'assets/book-image.jpeg',
      title: 'Book1',
      description: 'self help book',
      price: 125,
      review: 'good book',
      rating: 4.2,
      stock: 20,
    },
    {
      bookId: 2,
      imgUrl: 'assets/book-image.jpeg',
      title: 'Book2',
      description: 'Historical fiction book',
      price: 130,
      review: 'good book',
      rating: 4,
      stock: 120,
    },
    {
      bookId: 3,
      imgUrl: 'assets/book-image.jpeg',
      title: 'Book3',
      description: 'Graphic novel book',
      price: 1250,
      review: 'good book',
      rating: 3,
      stock: 10,
    },
    {
      bookId: 4,
      imgUrl: 'assets/book-image.jpeg',
      title: 'Book4',
      description: 'self help book',
      price: 75,
      review: 'good book',
      rating: 3.2,
      stock: 11,
    },
  ];

  public addBook(book: book): void {
    book.bookId = this.bookList.length + 1;
    if (book.rating > 5) {
      book.rating = 5;
    }
    this.bookList.push(book);
  }

  public editBook(bookId: number): void {
    const currentIndex = this.bookList.findIndex(
      (book) => book.bookId === bookId
    );
    if (currentIndex !== -1) {
      this.editBookIndex = currentIndex;
      this.selectedBook = { ...this.bookList[this.editBookIndex] };
      this.isEditMode = true;
    }
  }

  public updateBook(book: book): void {
    if (book.rating > 5) {
      book.rating = 5;
    }
    this.bookList[this.editBookIndex] = book;
    this.editBookIndex = -1;
    this.selectedBook = undefined;
    this.isEditMode = false;
  }

  public deleteConfirmation(bookIndex: number): void {
    this.bookToDeleteId = bookIndex;
    this.confirmation.confirmationModal.nativeElement.click();
  }

  public onDeleteConfirmed(confirm: boolean): void {
    if (
      confirm &&
      this.bookToDeleteId !== undefined &&
      this.bookToDeleteId !== null
    ) {
      if (
        this.bookToDeleteId >= 0 &&
        this.bookToDeleteId < this.bookList.length
      ) {
        this.bookList.splice(this.bookToDeleteId, 1);
      }
    }
    this.bookToDeleteId = undefined;
  }
}
