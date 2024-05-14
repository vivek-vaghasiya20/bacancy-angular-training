import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from './guards/admin-guard.service';
import { UserGuardService } from './guards/user-guard.service';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'admin',
    canLoad: [AdminGuardService],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'user',
    canLoad: [UserGuardService],
    loadChildren: () =>
      import('./modules/user/user.module').then((mod) => mod.UserModule),
  },
  {
    path: '',
    canLoad: [AuthGuardService],
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
