import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('../app/user/user.module').then((mod) => mod.UserModule),
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
