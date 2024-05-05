import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book-list/book/book.component';
import { BookActionComponent } from './book-list/book-action/book-action.component';
import { BookDetailComponent } from './book-list/book-detail/book-detail.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    BookActionComponent,
    BookDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
