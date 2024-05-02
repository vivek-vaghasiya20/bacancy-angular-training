import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, from, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticate: boolean = false;
  private authToken: string = '';

  constructor(private httpClient: HttpClient, private router: Router) {}

  public loginUser(loginData: FormData): Observable<{ token: string }> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient
      .post<{ token: string }>(
        'https://localhost:7204/api/User/Login',
        loginData,
        httpOptions
      )
      .pipe(
        tap((response) => {
          this.authToken = response.token;
          localStorage.setItem('authToken', this.authToken);
          //this.isAuthenticate = true;
        }),
        catchError((error) => {
          // Transform error or perform error-specific logic
          if (error.status === 401) {
            // Unauthorized error handling
            // Example: Redirect to login page
            this.router.navigate(['/login']);
          }
          // Return a new observable or throw a new error
          //return;
          return from(throwError(() => new error('Login failed')));
        })
      );
  }
}
