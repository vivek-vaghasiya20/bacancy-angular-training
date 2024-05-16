import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const canMatchAdmin: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): boolean => {
  const localStorageService = inject(LocalStorageService);
  const email = localStorageService.getLogInEmail();
  if (email) {
    const loggedInUser = localStorageService.getUserByEmail(email);
    if (loggedInUser && loggedInUser.role === 'admin') {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
