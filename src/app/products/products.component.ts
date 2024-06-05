import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/products.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
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
