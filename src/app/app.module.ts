import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { BooklistComponent } from './bookstore/booklist/booklist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BookstoreComponent, BooklistComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
