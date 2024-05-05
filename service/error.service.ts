import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorSubject: Subject<HttpErrorResponse> =
    new Subject<HttpErrorResponse>();

  public emitErrorsInSubject(errorMsg: HttpErrorResponse): void {
    this.errorSubject.next(errorMsg);
  }

  public getErrorFromSubject(): Observable<HttpErrorResponse> {
    return this.errorSubject.asObservable();
  }
}
