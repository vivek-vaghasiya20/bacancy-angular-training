import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from 'interface/book.interface';
import { Subscription } from 'rxjs';
import { BookService } from 'service/book.service';

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
    'Friction',
    'Non-Friction',
    'Sci-fi',
  ];
  public priceRanges: { label: string }[] = [
    { label: 'All Price' },
    { label: '99-199' },
    { label: '199-299' },
    { label: '299-399' },
    { label: '399-more' },
  ];
  public subscriptions: Subscription[] = [];

  constructor(private bookService: BookService, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.loadBooks();
  }

  public initForm(): void {
    this.filterForm = this.fb.group({
      title: [''],
      category: ['All'],
      priceRange: ['All price'],
    });
  }

  public loadBooks() {
    const loadBookSubscription = this.bookService.getBooks().subscribe({
      next: (books) => {
        this.bookList = books;
      },
      error: (err) => {
        alert(err);
      },
    });
    this.subscriptions.push(loadBookSubscription);
  }

  // public fetchOnFilter(){
  //   const filterSubscription = this.bookService.
  // }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
