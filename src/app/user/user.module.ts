import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './add-member/add-member.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';

@NgModule({
  declarations: [
    AddMemberComponent,
    UserDashboardComponent,
    UserHeaderComponent,
    UserFooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    UserHeaderComponent,
    UserFooterComponent,
    UserDashboardComponent,
    AddMemberComponent,
  ],
})
export class UserModule {}
