import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const adminRoutes: Routes = [
  { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    pathMatch: 'full',
  },
  { path: 'add-user', component: AddUserComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
