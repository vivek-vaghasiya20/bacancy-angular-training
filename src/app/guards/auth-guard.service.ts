import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private route: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const email = this.localStorageService.getLogInEmail();
    if (email) {
      const loggedInUser = this.localStorageService.getUserByEmail(email);
      if (loggedInUser && loggedInUser.role === 'admin') {
        this.route.navigate(['/admin']);
        return false;
      } else if (loggedInUser && loggedInUser.role === 'user') {
        this.route.navigate(['/user']);
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
}
