import { Component, Input } from '@angular/core';
import { book } from 'src/app/book-interface';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
  @Input() book!: book;
  
  public getStarColors(rating: number): string[] {
    const roundedRating = Math.round(rating);
    const starColors: string[] = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        if (roundedRating >= 4) {
          starColors.push('green');
        } else if (roundedRating >= 3) {
          starColors.push('yellow');
        } else {
          starColors.push('red');
        }
      } else {
        starColors.push('grey');
      }
    }
    return starColors;
  }
}
