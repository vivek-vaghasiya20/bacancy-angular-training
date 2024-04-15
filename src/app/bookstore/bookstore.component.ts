import { Component, OnInit } from '@angular/core';
import { StoreService } from '../service/store.service';
import { bookStore } from '../interface/bookStore-interface';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss'],
})
export class BookstoreComponent implements OnInit {
  constructor(private bookstoreService: StoreService) {}

  public bookstores: bookStore[] = [];

  public newBookstore: bookStore = {
    storeId: 0,
    storeName: '',
    storeOwner: '',
  };

  ngOnInit(): void {
    this.bookstores = this.bookstoreService.getBookStore();
  }

  public onAddBookstore(): void {
    if (this.newBookstore.storeName && this.newBookstore.storeOwner) {
      this.bookstores.push({ ...this.newBookstore });
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
