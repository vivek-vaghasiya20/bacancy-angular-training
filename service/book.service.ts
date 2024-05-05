import { Injectable } from '@angular/core';
import { Book } from 'interface/book.interface';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, observable, tap, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private connectionURL =
    'https://http-part2-fbc26-default-rtdb.asia-southeast1.firebasedatabase.app/books.json';

  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public addBook(book: Book): Observable<{ [key: string]: string }> {
    return this.httpClient.post<{ [key: string]: string }>(
      this.connectionURL,
      book
    );
  }

  public getBooks(): Observable<Book[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.httpClient
      .get<{ [key: string]: Book }>(this.connectionURL, { headers })
      .pipe(
        map((res) => {
          const books = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              books.push({ ...res[key], id: key });
            }
          }
          return books;
        }),
        catchError((error) => {
          this.errorService.emitErrorsInSubject(error);
          return throwError(() => new Error(error.message));
        })
      );
  }

  public getFilteredBooks(value: any): Observable<Book[]> {
    return this.getBooks().pipe(
      map((books: Book[]) => {
        return books.filter((book: Book) => {
          return (
            (value.title
              ? book.title.toLowerCase().includes(value.title.toLowerCase())
              : true) &&
            (value.categories != 'All category'
              ? book.category === value.category
              : true) &&
            (value.priceRange !== 'All price'
              ? this.checkPriceRange(book.price, value.priceRange)
              : true)
          );
        });
      }),
      catchError((error) => {
        this.errorService.emitErrorsInSubject(error);
        return throwError(() => new Error(error.message));
      })
    );
  }

  checkPriceRange(price: number, priceRange: string): boolean {
    const [min, max] = priceRange.split('-').map(Number);
    if (max === undefined || Number.isNaN(max)) {
      return price >= min;
    } else {
      return price >= min && price <= max;
    }
  }
}
