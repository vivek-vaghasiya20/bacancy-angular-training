import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanLoadGuardService } from './service/can-load-guard.service';
import { ChildGuardService } from './service/child-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivateChild: [ChildGuardService],
    children: [{ path: 'course', component: CourseComponent }],
  },

  {
    path: 'posts',
    loadChildren: () =>
      import('../app/post/post.module').then((mod) => mod.PostModule),
    canLoad: [CanLoadGuardService],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
