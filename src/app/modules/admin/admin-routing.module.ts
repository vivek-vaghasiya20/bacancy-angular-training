import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },
      { path: 'add-user', component: AddUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
