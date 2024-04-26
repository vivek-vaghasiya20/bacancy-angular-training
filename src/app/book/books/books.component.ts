import { Component } from '@angular/core';
import { Book } from 'interface/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  public bookList: Book[] = [
    { title: 'vivek', description: 'hello', price: 120, author: 'vivek' },
  ];
}
