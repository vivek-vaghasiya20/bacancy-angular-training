import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { HttpComponent } from './http/http.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: UserDashboardComponent,
      },
      { path: 'add-member', component: AddMemberComponent },
      { path: 'http', component: HttpComponent },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
