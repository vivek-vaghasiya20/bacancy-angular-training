import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeActiveGuardService } from '../service/de-active-guard.service';
import { PostResolverService } from '../service/post-resolver.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostComponent } from './post.component';

const productsRoutes: Routes = [
  {
    path: '',
    component: PostComponent,
    resolve: { data: PostResolverService },
  },
  {
    path: 'createPost',
    component: CreatePostComponent,
    //canActivate: [AuthGuardService],
    canDeactivate: [DeActiveGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
