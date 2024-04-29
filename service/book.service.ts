import { Injectable } from '@angular/core';
import { Book } from 'interface/book.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private connectionURL =
    'https://http-part2-fbc26-default-rtdb.asia-southeast1.firebasedatabase.app/books.json';
  public books: Book[] = [];
  constructor(private httpClient: HttpClient) {}

  public addBook(book: Book): void {
    this.httpClient
      .post<{ name: string }>(this.connectionURL, book)
      .subscribe((res) => {
        console.log(res + 'added in firebase');
        // this.getPosts().subscribe((posts) => {});
      });
  }

  public getBooks(): Observable<any> {
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
          // console.log(books);
          return books;
        }),
        catchError((error) => {
          return throwError(error + 'network error');
        })
      );
  }

  // searchBooks(searchQuery: string): Observable<Book[]> {
  //   // const encodedSearchQuery = encodeURIComponent(searchQuery);
  //   return this.httpClient.get<Book[]>(
  //     `${this.connectionURL}?&orderBy="title"&equalTo=${searchQuery}`
  //     // `${this.connectionURL}/books.json?&orderBy="title"&equalTo="${encodedSearchQuery}`
  //   );
  // }

  // filterBooksByCategory(category: string): Observable<Book[]> {
  //   console.log(category + ' from service');
  //   return this.httpClient.get<Book[]>(
  //     `${this.connectionURL}?orderBy="category"&equalTo="${category}"`
  //   );
  // }

  // filterBooksByPriceRange(
  //   minPrice: number,
  //   maxPrice: number
  // ): Observable<Book[]> {
  //   return this.httpClient.get<Book[]>(
  //     `${this.connectionURL}?orderBy="price"&startAt=${minPrice}&endAt=${maxPrice}`
  //   );
  // }
}
