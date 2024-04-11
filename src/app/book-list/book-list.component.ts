import { Component } from '@angular/core';
import { book } from '../book-interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  public bookList: book[] = [
    {
      bookId: 1,
      imgURL: 'assets/book-image.jpeg',
      title: 'Book1',
      description: 'self help book',
      price: 125,
      review: 'good book',
      rating: 4.2,
      stock: 20,
    },
    {
      bookId: 2,
      imgURL: 'assets/book-image.jpeg',
      title: 'Book2',
      description: 'Historical fiction book',
      price: 130,
      review: 'good book',
      rating: 4,
      stock: 120,
    },
    {
      bookId: 3,
      imgURL: 'assets/book-image.jpeg',
      title: 'Book3',
      description: 'Graphic novel book',
      price: 1250,
      review: 'good book',
      rating: 3,
      stock: 10,
    },
    {
      bookId: 4,
      imgURL: 'assets/book-image.jpeg',
      title: 'Book4',
      description: 'self help book',
      price: 75,
      review: 'good book',
      rating: 3.2,
      stock: 11,
    },
    {
      bookId: 5,
      imgURL: 'assets/book-image.jpeg',
      title: 'Book5',
      description: 'self help book',
      price: 75,
      review: 'good book',
      rating: 3.2,
      stock: 11,
    },
  ];

  public addBook(book: book): void {}

  public removeBook(bookid: number): void {}
}
