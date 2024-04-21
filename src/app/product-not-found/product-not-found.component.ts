import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-not-found',
  templateUrl: './product-not-found.component.html',
  styleUrls: ['./product-not-found.component.scss'],
})
export class ProductNotFoundComponent {
  constructor(private router: Router) {}
  public onProducts(): void {
    this.router.navigate(['productsList']);
  }
}
