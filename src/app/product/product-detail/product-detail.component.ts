import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProductFormParamId();
  }

  private getProductFormParamId(): void {
    const productId = +this.route.snapshot.params['id'];
    this.product = this.productService.getProductFromId(productId);
    if (this.product === undefined) {
      this.router.navigate(['../products']);
    }
  }

  public addInCart(): void {
    if (this.product) this.productService.addProductInCart(this.product.id);
  }

  public viewReview(): void {
    this.router.navigate(['view-review'], { relativeTo: this.route });
  }
}
