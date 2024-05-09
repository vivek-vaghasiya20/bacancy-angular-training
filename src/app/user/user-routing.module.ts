import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';
import { HttpComponent } from './http/http.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' },
      {
        path: 'user-dashboard',
        component: UserDashboardComponent,
      },
      { path: 'add-member', component: AddMemberComponent },
      { path: 'http', component: HttpComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
