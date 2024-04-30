import { Injectable } from '@angular/core';
import { Book } from '../interface/book-interface';
import { Observable, concatMap, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  private bookList: Book[] = [
    {
      id: 1,
      name: 'Think like a monk',
      price: 195,
      author: 'Jay Shetty',
      publishingYear: 2020,
    },
    {
      id: 2,
      name: 'The Monk Who Sold his Ferrari',
      price: 158,
      author: 'Robin Sharma',
      publishingYear: 2011,
    },
  ];

  public getBook(): Observable<Book[]> {
    return of(this.bookList);
  }

  public getBooksByIds(bookIds: number[]): Observable<Book[]> {
    return of(bookIds).pipe(
      concatMap((ids) => {
        const filterBookList: Book[] = [];
        this.bookList.forEach((element) => {
          if (ids.includes(element.id)) {
            filterBookList.push(element);
          }
        });
        return of(filterBookList);
      })
    );
  }

  public getBookById(bookId: number): Observable<Book | undefined> {
    const book = this.bookList.find((item) => item.id === bookId);
    return of(book);
  }

  public getBookByIdWithFakApi(id: number) {
    return this.httpClient.get<any[]>(
      `https://freetestapi.com/api/v1/books/${id}.json`
    );
  }
}
