import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  Router
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChildGuardService implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivateChild(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      alert('You Are Not Allowed To this Page First You need to login ');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
