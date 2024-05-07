import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { admin } from 'src/app/interface/admin.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('formObject') formData!: NgForm;

  public email: string = '';
  public password: string = '';

  constructor(private router: Router) {}

  public onSubmit(): void {
    this.email = this.formData.value.emailField;
    this.password = this.formData.value.passwordField;

    if (this.checkEmailExistence(this.email)) {
      const isAuthenticated = this.authenticate(this.email, this.password);

      if (isAuthenticated) {
        const loggedInPerson = JSON.parse(
          localStorage.getItem('loggedInPerson') || '{}'
        );
        if (loggedInPerson && loggedInPerson.role === 'Admin') {
          this.router.navigate(['/admin/admin-dashboard']);
        } else {
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
    const localStorageData = localStorage.getItem('users');
    if (localStorageData) {
      const adminData: admin[] = JSON.parse(localStorageData);

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
    const localStorageData = localStorage.getItem('users');
    if (localStorageData) {
      const adminData: admin[] = JSON.parse(localStorageData);

      const adminMatch = adminData.find(
        (admin) => admin.email === email && admin.password === password
      );

      if (adminMatch) {
        localStorage.setItem('loggedInPerson', JSON.stringify(adminMatch));
        return true;
      }

      for (const admin of adminData) {
        const userMatch = admin.users.find(
          (user) => user.email === email && user.password === password
        );
        if (userMatch) {
          localStorage.setItem('loggedInPerson', JSON.stringify(userMatch));
          return true;
        }
      }
    }
    return false;
  }
}
