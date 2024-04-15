import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/book-interface';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService],
})
export class BooklistComponent implements OnInit {
  constructor(private bookService: BookService) {}
  @Input() index!: number;
  public bookList: Book[] = [];
  public newBook: Book = {
    bookId: 0,
    bookTitle: '',
    bookAuthor: '',
    bookPrice: 0,
    bookDescription: '',
  };

  ngOnInit(): void {
    this.bookList = this.bookService.getBook();
  }

  public onAddBook(): void {
    if (
      this.newBook.bookTitle &&
      this.newBook.bookAuthor &&
      this.newBook.bookPrice &&
      this.newBook.bookDescription
    ) {
      this.bookService.addBook(this.newBook);
      this.newBook = {
        bookId: 0,
        bookTitle: '',
        bookAuthor: '',
        bookPrice: 0,
        bookDescription: '',
      };
      this.bookList = this.bookService.getBook();
    } else {
      alert('Please fill in all fields to add a book.');
    }
  }
}
