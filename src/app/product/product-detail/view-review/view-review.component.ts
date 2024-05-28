import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.scss'],
})
export class ViewReviewComponent implements OnInit {
  public product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductFormParamId();
  }

  private getProductFormParamId(): void {
    const productId = +this.route.parent?.parent?.snapshot.params['id'];
    this.product = this.productService.getProductFromId(productId);
    if (this.product === undefined) {
      this.router.navigate(['../products']);
    }
  }
}
