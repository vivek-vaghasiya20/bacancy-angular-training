import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canMatchAdmin } from './guards/adminGuards';
import { canMatchAuth } from './guards/authGuards';
import { canMatchUser } from './guards/userGuards';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((mod) => mod.AdminModule),
    canMatch: [canMatchAdmin],
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/user/user.module').then((mod) => mod.UserModule),
    canMatch: [canMatchUser],
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((mod) => mod.AuthModule),
    canMatch: [canMatchAuth],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
