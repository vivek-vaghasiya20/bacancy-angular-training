import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/interface/admin.interface';
import { User } from 'src/app/interface/User.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

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
    private localStorageService: LocalStorageService,
    private userService: UserService
  ) {}

  public onSubmit(): void {
    this.email = this.formData.value.emailField;
    this.password = this.formData.value.passwordField;

    if (this.userService.checkEmailExistence(this.email)) {
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
        Swal.fire('Invalid credentials or status is inactive.');
      }
    } else {
      Swal.fire('Email not found.');
    }
  }

  private authenticate(email: string, password: string): boolean {
    const adminData = this.localStorageService.getUserData();
    if (adminData) {
      const encryptedPassword =
        this.localStorageService.encryptPassword(password);

      const adminMatch = adminData.find(
        (admin: Admin) =>
          admin.email === email && admin.password === encryptedPassword
      );

      if (adminMatch) {
        this.localStorageService.setLogInEmail(adminMatch.email);
        return true;
      }

      for (const admin of adminData) {
        const userMatch = admin.users.find(
          (user: User) =>
            user.email === email &&
            user.password === encryptedPassword &&
            user.isActive
        );
        if (userMatch) {
          this.localStorageService.setLogInEmail(userMatch.email);
          return true;
        }
      }
    }
    return false;
  }
}
