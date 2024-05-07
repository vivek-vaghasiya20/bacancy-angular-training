import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './add-member/add-member.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    AddMemberComponent,
    UserDashboardComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
  exports: [
    UserHeaderComponent,
    UserFooterComponent,
    UserDashboardComponent,
    AddMemberComponent,
    UserComponent,
  ],
})
export class UserModule {}
