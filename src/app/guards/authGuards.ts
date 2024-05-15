import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const canMatchAuth: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): boolean => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);
  const email = localStorageService.getLogInEmail();

  if (email) {
    const loggedInUser = localStorageService.getUserByEmail(email);
    if (loggedInUser && loggedInUser.role === 'admin') {
      router.navigate(['/admin']);
      return false;
    } else if (loggedInUser && loggedInUser.role === 'user') {
      router.navigate(['/user']);
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
