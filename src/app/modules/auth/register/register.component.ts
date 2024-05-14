import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegex, passwordRegex } from 'src/app/const/const';
import { Admin } from 'src/app/interface/admin.interface';
import { User } from 'src/app/interface/User.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';
import { passwordMatchValidator } from 'src/app/validations/password-match.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registrationForm!: FormGroup;
  public genders: string[] = ['Male', 'Female', 'Other'];
  public hobbies: string[] = ['Cricket', 'Chess', 'Badminton', 'Coding'];
  public roles: string[] = ['Admin', 'User'];
  public adminList: string[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.checkAndCreateAdminData();
  }

  public onSubmit(): void {
    const email = this.registrationForm.get('email')?.value;
    if (this.userService.checkEmailExistence(email)) {
      Swal.fire('This email already exists in the database.');
    } else {
      if (this.registrationForm.get('role')?.value === 'Admin') {
        this.addNewAdmin();
      } else {
        this.addNewUser();
      }
    }
  }

  private addNewAdmin(): void {
    let newAdmin: Admin = {
      ...this.registrationForm.getRawValue(),
      password: this.localStorageService.encryptPassword(
        this.registrationForm.get('password')?.value
      ),
      confirmPassword: this.localStorageService.encryptPassword(
        this.registrationForm.get('confirmPassword')?.value
      ),
      role: 'admin',
      isActive: true,
      users: [],
    };

    let adminData: Admin[] = [];

    const localStorageData = localStorage.getItem('users');
    if (localStorageData !== null) {
      adminData = JSON.parse(localStorageData);
    }
    adminData.push(newAdmin);
    localStorage.setItem('users', JSON.stringify(adminData));
    Swal.fire('Successfully registered as admin.');
    this.registrationForm.reset();
    this.router.navigate(['/login']);
  }

  private addNewUser(): void {
    let newUser: User = {
      ...this.registrationForm.getRawValue(),
      password: this.localStorageService.encryptPassword(
        this.registrationForm.get('password')?.value
      ),
      confirmPassword: this.localStorageService.encryptPassword(
        this.registrationForm.get('confirmPassword')?.value
      ),
      role: 'user',
      isActive: true,
      members: [],
    };
    const adminEmail = this.registrationForm.get('adminList')?.value;
    this.userService.addNewUser(newUser, adminEmail);
    Swal.fire('Successfully registered as user.');
    this.registrationForm.reset();
    this.router.navigate(['/login']);
  }

  private checkAndCreateAdminData(): void {
    const localStorageData = localStorage.getItem('users');
    if (!localStorageData || localStorageData.trim() === '') {
      const newAdmin: Admin = {
        firstName: 'Admin',
        lastName: 'Admin',
        email: 'admin@example.com',
        password: this.localStorageService.encryptPassword('Admin@123'),
        confirmPassword: this.localStorageService.encryptPassword('Admin@123'),
        gender: 'Male',
        hobbies: 'Coding',
        role: 'admin',
        isActive: true,
        users: [],
      };
      localStorage.setItem('users', JSON.stringify([newAdmin]));
    }
  }

  private initializeForm(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      confirmPassword: ['', [Validators.required, passwordMatchValidator]],
      gender: ['', Validators.required],
      hobbies: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  public onRoleChange(): void {
    const selectedRole: string = this.registrationForm.get('role')?.value;
    if (selectedRole === 'User') {
      this.registrationForm.addControl(
        'adminList',
        new FormControl('', [Validators.required])
      );

      const localStorageData = localStorage.getItem('users');
      if (localStorageData) {
        const adminData: Admin[] = JSON.parse(localStorageData);
        this.adminList = adminData.map((admin) => admin.email);
      } else {
        console.error('Admin data not found in localStorage');
      }
    } else {
      if (this.registrationForm.get('adminList')) {
        this.registrationForm.removeControl('adminList');
      }
    }
  }
}
