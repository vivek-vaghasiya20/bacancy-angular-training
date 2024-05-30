import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductNotFoundComponent } from '../product-not-found/product-not-found.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'productsList', component: ProductListComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactUsComponent, pathMatch: 'full' },
  { path: 'about', component: AboutUsComponent, pathMatch: 'full' },
  {
    path: 'product/:productId',
    component: ProductDetailComponent,
    pathMatch: 'full',
  },
  { path: 'notfound', component: ProductNotFoundComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
