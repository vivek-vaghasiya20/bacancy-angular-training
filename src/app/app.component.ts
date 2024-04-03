import { Component } from '@angular/core';
import { book } from './interface/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bacancy-angular-training';
  public bookList: book[] = [
    {
      title: 'dbms',
      author: 'vivek',
      description: 'database management system',
      price: 190,
    },
    {
      title: 'ds',
      author: 'vivek',
      description: 'data structure',
      price: 100,
    },
    {
      title: 'cn',
      author: 'vivek',
      description: 'computer network',
      price: 200,
    },
    {
      title: 'oop',
      author: 'vivek',
      description: 'object oriented programming',
      price: 120,
    },
  ];

  public addBook(bookDetails: book): void {
    this.bookList.push(bookDetails);
  }

  public notifyBook(bookTitle: string): void {
    alert(`BookTitle: ${bookTitle}`);
  }
}
