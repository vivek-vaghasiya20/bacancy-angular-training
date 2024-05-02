import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  router: Router = inject(Router)
) => {
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    return true;
  }
  alert('Please first login for access the dashboard.');
  router.navigate(['login']);
  return false;
};
