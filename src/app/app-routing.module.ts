import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { DeActiveGuardService } from './service/de-active-guard.service';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  //{ path: '', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'posts',
    loadChildren: () =>
      import('../app/post/post.module').then((mod) => mod.PostModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
