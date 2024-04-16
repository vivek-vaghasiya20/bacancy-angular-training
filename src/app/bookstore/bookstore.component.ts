import { Component, OnInit } from '@angular/core';
import { StoreService } from '../service/store.service';
import { BookStore } from '../interface/bookStore-interface';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss'],
})
export class BookstoreComponent implements OnInit {
  constructor(private bookstoreService: StoreService) {}

  public bookstores: BookStore[] = [];

  public newBookstore: BookStore = {
    storeId: 0,
    storeName: '',
    storeOwner: '',
  };

  ngOnInit(): void {
    this.bookstores = this.bookstoreService.getBookStore();
  }

  public onAddBookstore(): void {
    if (this.newBookstore.storeName && this.newBookstore.storeOwner) {
      this.bookstoreService.addBookStore(this.newBookstore);
      this.newBookstore = {
        storeId: 0,
        storeName: '',
        storeOwner: '',
      };
    } else {
      alert('Please fill in all fields to add a bookstore.');
    }
  }
}
