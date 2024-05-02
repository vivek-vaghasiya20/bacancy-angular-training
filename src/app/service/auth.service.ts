import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, from, tap, throwError } from 'rxjs';
import { Response } from '../interface/response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private isAuthenticate: boolean = false;
  private authToken: string = '';
  public userEmail: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public loginUser(loginData: FormData): Observable<Response> {
    return this.httpClient
      .post<Response>(
        'https://localhost:7204/api/User/Login',
        loginData
      )
      .pipe(
        tap((response) => {
          this.authToken = JSON.stringify(response.data);
          this.authToken = this.authToken.slice(1, -1);
          localStorage.setItem('authToken', this.authToken);
          //this.isAuthenticate = true;
        })
      );
  }

  public logout(): void {
    //this.isAuthenticate = false;
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    this.authToken = '';
    this.router.navigate(['/login']);
  }

  public registerUser(userData: FormData): Observable<Response> {
    return this.httpClient.post<Response>(
      'https://localhost:7204/api/User/RegisterUser',
      userData
    );
  }

  public getDetails(): Observable<Response> {
    return this.httpClient.get<Response>(
      'https://localhost:7204/api/User/GetDetails'
    );
  }
}
