import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import Swal from 'sweetalert2';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanActivate {
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
        return true;
      } else {
        Swal.fire('Unauthorized role');
        this.route.navigate(['/login']);
        this.localStorageService.removeLogInEmail();
        return false;
      }
    } else {
      Swal.fire('You Are Not Logged In. Please log in first.');
      this.route.navigate(['/login']);
      return false;
    }
  }
}
