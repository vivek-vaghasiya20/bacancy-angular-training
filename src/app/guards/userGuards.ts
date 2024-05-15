import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import Swal from 'sweetalert2';

export const canMatchUser: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): boolean => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);
  const email = localStorageService.getLogInEmail();
  if (email) {
    const loggedInUser = localStorageService.getUserByEmail(email);
    if (loggedInUser && loggedInUser.role === 'user') {
      return true;
    } else {
      Swal.fire('Unauthorized role');
      router.navigate(['/login']);
      return false;
    }
  } else {
    Swal.fire('You Are Not Logged In. Please log in first.');
    router.navigate(['/login']);
    return false;
  }
};
