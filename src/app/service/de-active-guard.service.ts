import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreatePostComponent } from '../post/create-post/create-post.component';

@Injectable({
  providedIn: 'root'
})
export class DeActiveGuardService implements CanDeactivate<CreatePostComponent> {
  canDeactivate(component: CreatePostComponent): boolean {
      if (!component.hasUnsavedValues()) {
          return window.confirm('Are you sure you want to leave? Your changes will be lost.');
      }
      return true;
  }
}
