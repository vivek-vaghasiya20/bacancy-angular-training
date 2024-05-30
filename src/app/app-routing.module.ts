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
    providers: [ProductService],
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((mod) => mod.CartModule),
    providers: [ProductService],
    //here i give ProductService as two different instance for cart and product module. so when i add product into the cart from the it will not show in the cart. because of in cart module the there is different instance for cart module.
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
