import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BooksComponent } from './books/books.component';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
  declarations: [BooksComponent, CreateBookComponent],
  imports: [CommonModule, BookRoutingModule],
  exports: [BooksComponent,CreateBookComponent],
})
export class BookModule {}
