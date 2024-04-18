import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { InvalidUrlComponent } from '../invalid-url/invalid-url.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'contact/:contactId',
    component: ContactUsComponent,
    pathMatch: 'full',
  },
  { path: 'about', component: AboutUsComponent, pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('../product/product.module').then((mod) => mod.ProductModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('../payment/payment.module').then((mod) => mod.PaymentModule),
  },
  { path: '404', component: InvalidUrlComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute, { anchorScrolling: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
