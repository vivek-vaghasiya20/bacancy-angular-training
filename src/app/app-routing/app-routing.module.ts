import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ProductDetailComponent } from '../product-list/product-detail/product-detail.component';
import { InvalidUrlComponent } from '../invalid-url/invalid-url.component';

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
  { path: '404', component: InvalidUrlComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
