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
      productColor: 'green',
      productSecondColor: 'red',
      productSize: '14',
      productSecondSize: '15',
      productName: 'Laptop',
      productDescription: 'With 1 TB SSD',
      productPrice: 49999,
    },
    {
      productId: 2,
      productColor: 'yellow',
      productSecondColor: 'green',
      productSize: 'A4',
      productSecondSize: 'A3',
      productName: 'Book',
      productDescription: '100 page Book',
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
