import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorSubject: Subject<HttpErrorResponse> =
    new Subject<HttpErrorResponse>();

  public emitErrors(errorMsg: HttpErrorResponse): void {
    console.log('this come from the emit error');
    this.errorSubject.next(errorMsg);
  }

  
}
