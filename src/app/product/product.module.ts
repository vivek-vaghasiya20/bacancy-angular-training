import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
