import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';
@Injectable({ providedIn: 'root' })
export class ProductService {
  public cartList: Product[] = [
    {
      id: 3,
      name: 'book',
      price: 200,
      description: 'A4 size book',
      review: 'good quality of pages',
    },
  ];
  public productList: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 55000,
      description: 'gray color with 8 gb RAM',
      review: 'very good performance',
    },
    {
      id: 2,
      name: 'mouse',
      price: 550,
      description: 'black color with 1200 DPI',
      review: 'good battery life',
    },
    {
      id: 3,
      name: 'book',
      price: 200,
      description: 'A4 size book',
      review: 'good quality of pages',
    },
  ];

  constructor() {}

  public getProducts(): Product[] {
    return this.productList;
  }

  public getCartProducts(): Product[] {
    return this.cartList;
  }

  public getProductFromId(id: number): Product | undefined {
    return this.productList.find((product) => product.id === id);
  }

  public addProductInCart(id: number): void {
    const productToAdd = this.productList.find((product) => product.id === id);
    if (productToAdd) {
      this.cartList.push(productToAdd);
      alert('product added in cart successfully');
    }
  }
}
