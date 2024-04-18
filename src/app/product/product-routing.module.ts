import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const productRoute: Routes = [
  { path: '', component: ProductsComponent },
  {
    path: ':productId/:productColor/:productSize',
    component: ProductDetailComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(productRoute)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
