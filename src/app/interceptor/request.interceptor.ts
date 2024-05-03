import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('authToken');
    const userEmail = localStorage.getItem('userEmail');
    if (token && userEmail) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
        setParams: {
          email: userEmail,
        },
      });
    }
    return next.handle(request);
  }
}
