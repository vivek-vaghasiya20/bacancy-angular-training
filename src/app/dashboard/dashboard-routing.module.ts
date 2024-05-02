import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const dashboardRoute: Routes = [
  // { path: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoute)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
