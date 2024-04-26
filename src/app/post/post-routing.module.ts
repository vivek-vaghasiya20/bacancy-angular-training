import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AuthGuardService } from '../service/auth-guard.service';
import { DeActiveGuardService } from '../service/de-active-guard.service';
import { PostResolverService } from '../service/post-resolver.service';

const productsRoutes: Routes = [
  {
    path: '',
    component: PostComponent,
    resolve: { data: PostResolverService },
  },
  {
    path: 'createPost',
    component: CreatePostComponent,
    canActivate: [AuthGuardService],
    canDeactivate: [DeActiveGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
