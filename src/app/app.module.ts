import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BooklistComponent } from './book-list/book-list.component';
import { BookstoreComponent } from './book-store/book-store.component';
import { BookService } from './service/book.service';

@NgModule({
  declarations: [AppComponent, BookstoreComponent, BooklistComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
