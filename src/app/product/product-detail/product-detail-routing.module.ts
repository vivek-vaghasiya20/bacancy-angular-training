import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'view-review',
        loadChildren: () =>
          import('./view-review/view-review.module').then(
            (mod) => mod.ViewReviewModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailRoutingModule {}
