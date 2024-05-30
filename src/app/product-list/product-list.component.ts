import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product-Interface';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}
  public productList: Product[] = [];

  ngOnInit() {
    this.productList = this.productService.getProduct();
  }

  public goOnProductDetail(productId: number): void {
    this.router.navigateByUrl(`product/${productId}`);
  }
}
