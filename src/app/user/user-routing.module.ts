import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const adminRoutes: Routes = [
  { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
  },
  { path: 'add-member', component: AddMemberComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
