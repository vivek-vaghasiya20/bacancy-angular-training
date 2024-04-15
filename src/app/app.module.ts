import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { BooklistComponent } from './bookstore/booklist/book-list.component';
import { FormsModule } from '@angular/forms';
import { BookService } from './service/book.service';

@NgModule({
  declarations: [AppComponent, BookstoreComponent, BooklistComponent],
  imports: [BrowserModule, FormsModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
