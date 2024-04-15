import { Injectable } from '@angular/core';
import { bookStore } from '../interface/bookStore-interface';
import { BookService } from 'src/app/service/book.service';
import { book } from '../interface/book-interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private bookListService: BookService) {
    console.log('store service created');
  }

  private storeList: bookStore[] = [
    {
      storeId: 1,
      storeName: 'yes bookstore',
      storeOwner: 'vivek',
    },
    {
      storeId: 2,
      storeName: 'dsb bookstore',
      storeOwner: 'divyesh',
    },
  ];

  public getBookStore(): bookStore[] {
    return this.storeList;
  }

  public addBookStore(newBook: bookStore): void {
    newBook.storeId = this.generateUniqueId();
    this.storeList.push(newBook);
  }

  private generateUniqueId(): number {
    const lastBook = this.storeList[this.storeList.length - 1];
    return lastBook ? lastBook.storeId + 1 : 1;
  }

  // public getBookList(): book[] {
  //   return this.bookListService.getBook();
  // }

  // public addBook(newBook: book): void {
  //   this.bookListService.addBook(newBook);
  // }
}
