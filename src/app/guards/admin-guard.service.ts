import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  Router,
  UrlSegment
} from '@angular/router';
import Swal from 'sweetalert2';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanLoad {
  constructor(
    private localStorageService: LocalStorageService,
    private route: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const email = this.localStorageService.getLogInEmail();
    if (email) {
      const loggedInUser = this.localStorageService.getUserByEmail(email);
      if (loggedInUser && loggedInUser.role === 'admin') {
        return true;
      } else {
        Swal.fire('Unauthorized role');
        this.route.navigate(['/login']);
        return false;
      }
    } else {
      Swal.fire('You Are Not Logged In. Please log in first.');
      this.route.navigate(['/login']);
      return false;
    }
  }
}
