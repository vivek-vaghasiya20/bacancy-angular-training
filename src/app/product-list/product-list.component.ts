import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../interface/product-Interface';
import { Router } from '@angular/router';

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
