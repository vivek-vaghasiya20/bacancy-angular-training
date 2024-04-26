import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CreateBookComponent } from './create-book/create-book.component';

const bookRoutes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'createBook',
    component: CreateBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
