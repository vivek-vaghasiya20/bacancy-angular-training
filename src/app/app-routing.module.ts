import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreLoadingStrategyService } from './services/pre-loading-strategy.service';
import { ProductService } from './services/product.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./product/product.module').then((mod) => mod.ProductModule),
    data: { preload: true },
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((mod) => mod.CartModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreLoadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
