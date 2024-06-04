import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [ProductDescriptionComponent, ProductDetailComponent],
  imports: [CommonModule],
  exports: [ProductDescriptionComponent, ProductDetailComponent],
})
export class ProductModule {}
