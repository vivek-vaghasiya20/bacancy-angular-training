import { Component } from '@angular/core';
import { Book } from 'interface/book.interface';
import { BookService } from 'service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  constructor(private bookService: BookService) {}
  public bookList: Book[] = [];
  public filteredBooks: Book[] = [];
  
  // public searchQuery: string = '';
  // public priceRange: string = '0';
  // public selectedCategory: string = '';
  // public minPrice: number = 0;
  // public maxPrice: number = Infinity;
  // constructor(
  //   private bookService: BookService,
  //   private errorService: ErrorService
  // ) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (books) => {
        this.bookList = books;
        // this.filteredBooks = books;
      },
      (error) => {
        console.log(error + 'Error from Catch error');
      }
    );
  }

  // public onSearch(searchQuery: string): void {
  //   console.log('entered in onsearch');
  //   if (searchQuery.trim() !== '') {
  //     console.log(searchQuery + 'hii');
  //     this.bookService.searchBooks(searchQuery).subscribe(
  //       (books) => {
  //         this.filteredBooks = books;
  //       },
  //       (error) => {
  //         console.log(error + 'Error from Interceptor');
  //       }
  //     );
  //   } else {
  //     this.resetFilters();
  //   }
  // }

  // public filterByPriceRange(): void {
  //   switch (this.priceRange) {
  //     case '1':
  //       this.minPrice = 0;
  //       this.maxPrice = 10;
  //       break;
  //     case '2':
  //       this.minPrice = 10;
  //       this.maxPrice = 50;
  //       break;
  //     case '3':
  //       this.minPrice = 50;
  //       this.maxPrice = Infinity;
  //       break;
  //     default:
  //       this.resetFilters();
  //       return;
  //   }
  //   this.bookService
  //     .filterBooksByPriceRange(this.minPrice, this.maxPrice)
  //     .subscribe(
  //       (books) => {
  //         this.filteredBooks = books;
  //       },
  //       (error) => {
  //         this.errorService.handleError(
  //           error.message + 'An error occurred from subject'
  //         );
  //       }
  //     );
  // }
  // filterByCategory(): void {
  //   if (this.selectedCategory !== '') {
  //     console.log(this.selectedCategory + ' from component');
  //     this.bookService
  //       .filterBooksByCategory(this.selectedCategory)
  //       .subscribe((books) => {
  //         this.filteredBooks = books;
  //         console.log(books);
  //       });
  //   } else {
  //     this.resetFilters();
  //   }
  // }

  // resetFilters(): void {
  //   this.searchQuery = '';
  //   this.selectedCategory = '';
  //   this.minPrice = 0;
  //   this.maxPrice = Infinity;
  //   this.bookService.getBooks().subscribe((books) => {
  //     this.books = books;
  //     this.filteredBooks = books;
  //   });
  // }
}
