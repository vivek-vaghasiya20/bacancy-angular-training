import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from 'interface/book.interface';
import { Subscription } from 'rxjs';
import { BookService } from 'service/book.service';
import { ErrorService } from 'service/error.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  public bookList: Book[] = [];
  public filterForm!: FormGroup;
  public categories: string[] = [
    'All Category',
    'SelfHelp',
    'Friction',
    'Mystery',
    'Horror',
  ];
  public priceRanges: { label: string }[] = [
    { label: 'All Price' },
    { label: '99-199' },
    { label: '199-299' },
    { label: '299-399' },
    { label: '399-more' },
  ];
  public subscriptions: Subscription[] = [];

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private errorService: ErrorService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadBooks();
    this.showError();
  }

  public initForm(): void {
    this.filterForm = this.fb.group({
      title: [''],
      category: ['All Category'],
      priceRange: ['All Price'],
    });
  }

  public showError(): void {
    const errorSubscription = this.errorService
      .getErrorFromSubject()
      .subscribe({
        next: (error: HttpErrorResponse) => {
          let errorMessage = '';
          switch (error.status) {
            case 400:
              errorMessage = 'Bad Request';
              break;
            case 401:
              errorMessage = 'Unauthorize';
              break;
            case 404:
              errorMessage = 'Resource not found';
              break;
            case 500:
              errorMessage = 'Internal server error';
              break;
            default:
              errorMessage = 'Something went wrong. Please try latter';
              break;
          }
          alert(errorMessage);
        },
        error: (error) => alert(error.message),
      });
    this.subscriptions.push(errorSubscription);
  }

  public loadBooks(): void {
    const loadBookSubscription = this.bookService.getBooks().subscribe({
      next: (books) => {
        this.bookList = books;
      },
      error: (error) => {
        let errorMessage = '';
        switch (error.status) {
          case 400:
            errorMessage = 'Bad Request';
            break;
          case 401:
            errorMessage = 'Unauthorize';
            break;
          case 404:
            errorMessage = 'Resource not found';
            break;
          case 500:
            errorMessage = 'Internal server error';
            break;
          default:
            errorMessage = 'Something went wrong. Please try latter';
            break;
        }
        alert(errorMessage);
      },
    });
    this.subscriptions.push(loadBookSubscription);
  }

  public onSubmitFilter(): void {
    const filterSubscription = this.bookService
      .getFilteredBooks(this.filterForm.value)
      .subscribe({
        next: (books) => {
          console.log(
            '%csrcapp\book\books\books.component.ts:118 books',
            'color: #007acc;',
            books
          );
          this.bookList = books;
        },
        error: (error) => {
          let errorMessage = '';
          switch (error.status) {
            case 400:
              errorMessage = 'Bad Request';
              break;
            case 401:
              errorMessage = 'Unauthorize';
              break;
            case 404:
              errorMessage = 'Resource not found';
              break;
            case 500:
              errorMessage = 'Internal server error';
              break;
            default:
              errorMessage = 'Something went wrong. Please try latter';
              break;
          }
          alert(errorMessage);
        },
      });
    this.subscriptions.push(filterSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
