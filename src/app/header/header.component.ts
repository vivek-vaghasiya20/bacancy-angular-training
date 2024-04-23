import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private route: Router) {}

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    if (confirm('Are you Sure You Want to Logout')) {
      this.authService.logout();
      this.route.navigate(['home']);
    } else {
      this.route.navigate([this.route.url]);
    }
  }
}
