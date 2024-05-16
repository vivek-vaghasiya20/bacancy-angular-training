import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AddUserComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
  exports: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AddUserComponent,
    AdminComponent,
  ],
})
export class AdminModule {}
