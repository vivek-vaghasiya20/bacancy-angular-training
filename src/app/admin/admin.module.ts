import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AddUserComponent,
    AdminDashboardComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
  exports: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    AddUserComponent,
  ],
})
export class AdminModule {}
