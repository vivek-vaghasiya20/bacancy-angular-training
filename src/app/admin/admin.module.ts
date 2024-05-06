import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AddUserComponent,
  ],
  imports: [CommonModule],
  exports: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AddUserComponent,
  ],
})
export class AdminModule {}
