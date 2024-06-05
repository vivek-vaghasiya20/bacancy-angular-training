import { Component, OnInit, afterNextRender } from '@angular/core';
import { Product } from './interfaces/product.interface';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bacancy-angular-training';
  public products!: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (res: Product[]) => {
        this.products = res;
      },
      error: () => {
        alert('Error while fetching the Product data.');
      },
    });
  }
}
