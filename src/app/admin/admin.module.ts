import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';

@NgModule({
  declarations: [
    AddUserComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
  exports: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AddUserComponent,
  ],
})
export class AdminModule {}
