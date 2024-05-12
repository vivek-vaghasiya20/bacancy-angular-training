import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'interface/book.interface';
import { Observable, catchError, map, of } from 'rxjs';
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
          return of([]);
        })
      );
  }

  public getFilteredBooks(value: any): Observable<Book[]> {
    const isTitleMatch = (book: Book) =>
      value.title
        ? book.title.toLowerCase().includes(value.title.toLowerCase())
        : true;

    const isCategoryMatch = (book: Book) =>
      value.category !== 'All Category'
        ? book.category === value.category
        : true;

    const isPriceRangeMatch = (book: Book) =>
      value.priceRange !== 'All Price'
        ? this.checkPriceRange(book.price, value.priceRange)
        : true;

    return this.getBooks().pipe(
      map((books: Book[]) => {
        return books.filter((book: Book) => {
          const titleMatch = isTitleMatch(book);
          const categoryMatch = isCategoryMatch(book);
          const priceRangeMatch = isPriceRangeMatch(book);

          return titleMatch && categoryMatch && priceRangeMatch;
        });
      }),
      catchError((error) => {
        this.errorService.emitErrorsInSubject(error);
        return of([]);
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
