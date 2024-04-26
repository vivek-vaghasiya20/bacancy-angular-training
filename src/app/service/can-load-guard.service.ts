import { Injectable } from '@angular/core';
import {
  CanLoad,
  Router
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanLoadGuardService implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      alert('You Are Not Allowed To this Page First You need to login ');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
