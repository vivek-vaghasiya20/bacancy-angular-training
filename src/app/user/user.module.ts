import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AddMemberComponent,
    UserDashboardComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    UserDashboardComponent,
    AddMemberComponent,
  ],
})
export class UserModule {}
