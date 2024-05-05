import { Component, EventEmitter, Input, Output } from '@angular/core';
import { book } from 'src/app/book-interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() public book!: book;
  @Output() editBookEvent = new EventEmitter<book>();
  @Output() deleteBookEvent = new EventEmitter<book>();

  public stockAlert: boolean = false;
  public accordionOpen: boolean = false;

  public onDeleteBook(): void {
    this.deleteBookEvent.emit();
  }

  public OnEditBook(): void {
    this.editBookEvent.emit();
  }

  public showAlert(): void {
    this.stockAlert = true;
    setTimeout(() => {
      this.stockAlert = false;
    }, 1000);
  }

  public toggleAccordion(): void {
    this.accordionOpen = !this.accordionOpen;
  }
}
