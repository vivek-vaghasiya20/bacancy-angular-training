import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const canMatchAuth: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): boolean => {
  const localStorageService = inject(LocalStorageService);
  const email = localStorageService.getLogInEmail();
  if (email) {
    const loggedInUser = localStorageService.getUserByEmail(email);
    if (loggedInUser) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
