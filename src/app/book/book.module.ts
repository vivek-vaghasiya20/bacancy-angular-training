import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [BookListComponent],
})
export class BookModule {}
