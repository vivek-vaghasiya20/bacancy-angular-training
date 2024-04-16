import { Injectable } from '@angular/core';
import { Product } from './interface/product-Interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  private productList: Product[] = [
    {
      productId: 1,
      productName: 'Laptop',
      productDescription: 'With 1 TB SSD',
      productPrice: 49999,
    },
    {
      productId: 2,
      productName: 'Book',
      productDescription: 'A4 Size Book',
      productPrice: 49,
    },
  ];

  public getProduct(): Product[] {
    return this.productList;
  }

  public getProductById(productId: number): Product | undefined {
    return this.productList.find((product) => product.productId === productId);
  }
}
