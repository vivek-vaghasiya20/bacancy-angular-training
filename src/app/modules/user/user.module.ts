import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './add-member/add-member.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpComponent } from './http/http.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AddMemberComponent,
    UserDashboardComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserComponent,
    HttpComponent,
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule, FormsModule],
  exports: [
    UserHeaderComponent,
    UserFooterComponent,
    UserDashboardComponent,
    AddMemberComponent,
    UserComponent,
    HttpComponent,
  ],
})
export class UserModule {}
