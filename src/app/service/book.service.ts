import { Injectable } from '@angular/core';
import { book } from '../interface/book-interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  private bookList: book[] = [
    {
      bookId: 1,
      bookTitle: 'ds',
      bookAuthor: 'vivek',
      bookDescription: 'data structure',
      bookPrice: 123,
    },
    {
      bookId: 2,
      bookTitle: 'cn',
      bookAuthor: 'vivek2',
      bookDescription: 'computer networks',
      bookPrice: 23,
    },
  ];

  public getBook(): book[] {
    return this.bookList;
  }

  public addBook(newBook: book): void {
    newBook.bookId = this.generateUniqueId();
    this.bookList.push(newBook);
  }

  private generateUniqueId(): number {
    const lastBook = this.bookList[this.bookList.length - 1];
    return lastBook ? lastBook.bookId + 1 : 1;
  }
}
