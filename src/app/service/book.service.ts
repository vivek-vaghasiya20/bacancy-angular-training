import { Injectable } from '@angular/core';
import { Book } from '../interface/book-interface';

@Injectable()
export class BookService {
  constructor() {
    console.log('book service created');
  }

  private bookList: Book[] = [
    {
      bookId: 1,
      bookTitle: 'Psychology of Money',
      bookAuthor: 'Morgan House',
      bookDescription: 'Description 1',
      bookPrice: 185,
    },
    {
      bookId: 2,
      bookTitle: 'The Monk Who Sold his Ferrari',
      bookAuthor: 'Robin Sharma',
      bookDescription: 'Description 2',
      bookPrice: 223,
    },
  ];

  public getBook(): Book[] {
    return this.bookList;
  }

  public addBook(newBook: Book): void {
    newBook.bookId = this.generateUniqueId();
    this.bookList.push(newBook);
  }

  private generateUniqueId(): number {
    const lastBook = this.bookList[this.bookList.length - 1];
    return lastBook ? lastBook.bookId + 1 : 1;
  }
}
