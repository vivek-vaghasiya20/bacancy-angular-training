import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMemberComponent } from './add-member/add-member.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AddMemberComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AddMemberComponent,
  ],
})
export class UserModule {}
