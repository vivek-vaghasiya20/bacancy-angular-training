import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '../guards/auth-guard.service';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
