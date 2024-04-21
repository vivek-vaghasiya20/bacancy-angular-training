import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  public product: Product | undefined;
  public productId!: number;

  ngOnInit() {
    this.productId = +this.activatedRoute.snapshot.params['productId'];
    const product = this.productService.getProductById(this.productId);
    if (product) {
      this.product = product;
    } else {
      this.router.navigate(['notfound']);
    }
  }

  public goBack(): void {
    this.router.navigate(['/productsList']);
  }
}
