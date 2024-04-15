import { Injectable } from '@angular/core';
import { BookStore } from '../interface/bookStore-interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  private storeList: BookStore[] = [
    {
      storeId: 1,
      storeName: 'Book Store 1',
      storeOwner: 'Vivek',
    },
    {
      storeId: 2,
      storeName: 'Book Store 2',
      storeOwner: 'Utsav',
    },
    {
      storeId: 3,
      storeName: 'Book Store 3',
      storeOwner: 'Bhautik',
    },
  ];

  public getBookStore(): BookStore[] {
    return this.storeList;
  }

  public addBookStore(newBook: BookStore): void {
    newBook.storeId = this.generateUniqueId();
    this.storeList.push(newBook);
  }

  private generateUniqueId(): number {
    const lastBook = this.storeList[this.storeList.length - 1];
    return lastBook ? lastBook.storeId + 1 : 1;
  }
}
