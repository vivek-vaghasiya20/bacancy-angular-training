import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canMatchAdmin } from './guards/adminGuards';
import { canMatchAuth } from './guards/authGuards';
import { canMatchUser } from './guards/userGuards';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'admin',
    canMatch: [canMatchAdmin],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'user',
    canMatch: [canMatchUser],
    loadChildren: () =>
      import('./modules/user/user.module').then((mod) => mod.UserModule),
  },
  {
    path: '',
    canMatch: [canMatchAuth],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((mod) => mod.AuthModule),
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
