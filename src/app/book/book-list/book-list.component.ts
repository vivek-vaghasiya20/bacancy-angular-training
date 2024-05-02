import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  forkJoin,
  switchMap,
} from 'rxjs';
import { Book } from 'src/app/interface/book-interface';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  public bookList: Book[] = [];
  public book: Book | undefined;
  public showAllBooks: boolean = true;
  public bookForm!: FormGroup;
  public subscription: Subscription[] = [];
  constructor(private bookService: BookService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      bookId: [''],
    });

    //Task-1
    const getBookSubscription = this.bookService.getBook().subscribe((res) => {
      this.bookList = res;
    });
    this.subscription.push(getBookSubscription);

    //Task-2
    const bookIds = [1, 2, 3, 4, 5];
    const getBookByIdsSubscription = this.bookService
      .getBooksByIds(bookIds)
      .subscribe((books) => {
        this.bookList = books;
      });
    this.subscription.push(getBookByIdsSubscription);

    //Task-3
    const bookSearchSubscription = this.bookForm.controls['bookId'].valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((id) => {
          if (!id) {
            this.showAllBooks = true;
            return this.bookService.getBook();
          } else {
            this.showAllBooks = false;
            return this.bookService.getBookById(+id);
          }
        })
      )
      .subscribe((book) => {
        if (Array.isArray(book)) {
          this.bookList = book;
          this.book = undefined;
        } else if (book) {
          this.book = book;
          this.bookList = [];
        } else {
          this.bookList = [];
          this.book = undefined;
        }
      });
    this.subscription.push(bookSearchSubscription);

    this.getBooksUsingForkJoin();
  }

  //Task-4
  public getBooksUsingForkJoin() {
    const obs1$ = this.bookService.getBookByIdWithFakApi(1);
    const obs2$ = this.bookService.getBookByIdWithFakApi(2);
    const obs3$ = this.bookService.getBookByIdWithFakApi(300);

    forkJoin([obs1$, obs2$, obs3$]).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
