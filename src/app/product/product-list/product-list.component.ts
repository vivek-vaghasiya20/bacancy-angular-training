import { Component } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  constructor(private productService: ProductService) {}

  public productList: Product[] = this.productService.getProducts();
}
