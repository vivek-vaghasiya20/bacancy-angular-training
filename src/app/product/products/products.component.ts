import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product-Interface';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}
  public productList: Product[] = [];

  ngOnInit() {
    this.productList = this.productService.getProduct();
  }

  public goOnProductDetail(
    productId: number,
    productColor: string,
    productSize: string
  ): void {
    this.router.navigate(['/products', productId, productColor, productSize]);
  }
}
