import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/interface/product-Interface';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  public product!: Product;
  public productId!: number;
  public productColor!: string;
  public productSize!: string;

  ngOnInit() {
    this.productId = +this.activatedRoute.snapshot.params['productId'];

    //TASK 1
    this.productColor = this.activatedRoute.snapshot.params['productColor'];

    //TASK 2
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productSize = params['productSize'];
    });

    const product = this.productService.getProductById(this.productId);
    if (product) {
      this.product = product;
    } else {
      this.router.navigate(['404']);
    }
  }

  public goBack(): void {
    this.router.navigate(['/products']);
  }

  //TASK 1
  public changeColor(): void {
    this.router.navigate([
      '/products',
      this.productId,
      this.product.productSecondColor,
      this.productSize,
    ]);
  }

  //TASK 2
  public changeSize(): void {
    this.router.navigate([
      '/products',
      this.productId,
      this.productColor,
      this.product.productSecondSize,
    ]);
  }
}
