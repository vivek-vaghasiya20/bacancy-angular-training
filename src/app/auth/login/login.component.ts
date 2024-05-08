import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { admin } from 'src/app/interface/admin.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('formObject') formData!: NgForm;

  public email: string = '';
  public password: string = '';

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  public onSubmit(): void {
    this.email = this.formData.value.emailField;
    this.password = this.formData.value.passwordField;

    if (this.checkEmailExistence(this.email)) {
      if (this.authenticate(this.email, this.password)) {
        const loggedInPersonData = this.localStorageService.getUserByEmail(
          this.email
        );
        if (loggedInPersonData && loggedInPersonData.role === 'admin') {
          this.router.navigate(['/admin/admin-dashboard']);
        } else if (loggedInPersonData && loggedInPersonData.role === 'user') {
          this.router.navigate(['/user/user-dashboard']);
        }
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Email not found.');
    }
  }

  private checkEmailExistence(email: string): boolean {
    const adminData = this.localStorageService.getUserData();
    if (adminData) {
      const adminWithEmail = adminData.some((admin) => admin.email === email);
      if (adminWithEmail) {
        return true;
      }

      for (const admin of adminData) {
        const userWithEmail = admin.users.some((user) => user.email === email);
        if (userWithEmail) {
          return true;
        }
      }
    }
    return false;
  }

  private authenticate(email: string, password: string): boolean {
    const adminData = this.localStorageService.getUserData();
    if (adminData) {
      const adminMatch = adminData.find(
        (admin) => admin.email === email && admin.password === password
      );

      if (adminMatch) {
        localStorage.setItem('loggedInEmail', adminMatch.email);
        return true;
      }

      for (const admin of adminData) {
        const userMatch = admin.users.find(
          (user) => user.email === email && user.password === password
        );
        if (userMatch) {
          localStorage.setItem('loggedInEmail', userMatch.email);
          return true;
        }
      }
    }
    return false;
  }
}
