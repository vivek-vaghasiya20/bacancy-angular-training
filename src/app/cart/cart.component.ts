import { Component } from '@angular/core';
import { Product } from '../interface/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(private productService: ProductService) {}

  public productList: Product[] = this.productService.getCartProducts();
}
