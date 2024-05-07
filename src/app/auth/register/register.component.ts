import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { admin } from 'src/app/interface/admin.interface';
import { user } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registrationForm!: FormGroup;
  public genders: string[] = ['Male', 'Female', 'Other'];
  public hobbies: string[] = ['Cricket', 'Chess', 'Badminton', 'Coding'];
  public roles: string[] = ['Admin', 'User'];
  public adminList: string[] = [];
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
    this.checkAndCreateAdminData();
  }

  public onSubmit(): void {
    const email = this.registrationForm.get('email')?.value;
    if (this.checkEmailExistence(email)) {
      alert('This email already exists in the database.');
    } else {
      if (this.registrationForm.get('role')?.value === 'Admin') {
        this.addNewAdmin();
      } else {
        this.addNewUser();
      }
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

  private addNewAdmin(): void {
    let newAdmin: admin = {
      firstName: this.registrationForm.get('firstName')?.value,
      lastName: this.registrationForm.get('lastName')?.value,
      email: this.registrationForm.get('email')?.value,
      password: this.registrationForm.get('password')?.value,
      confirmPassword: this.registrationForm.get('confirmPassword')?.value,
      gender: this.registrationForm.get('gender')?.value,
      hobbies: this.registrationForm.get('hobbies')?.value,
      role: 'admin',
      isActive: true,
      users: [],
    };

    let adminData: admin[] = [];

    const localStorageData = localStorage.getItem('users');
    if (localStorageData !== null) {
      adminData = JSON.parse(localStorageData);
    }
    adminData.push(newAdmin);
    localStorage.setItem('users', JSON.stringify(adminData));
    alert('Successfully registered as admin.');
    this.registrationForm.reset();
    this.router.navigate(['/login']);
  }

  private addNewUser(): void {
    let newUser: user = {
      firstName: this.registrationForm.get('firstName')?.value,
      lastName: this.registrationForm.get('lastName')?.value,
      email: this.registrationForm.get('email')?.value,
      password: this.registrationForm.get('password')?.value,
      confirmPassword: this.registrationForm.get('confirmPassword')?.value,
      gender: this.registrationForm.get('gender')?.value,
      hobbies: this.registrationForm.get('hobbies')?.value,
      role: 'user',
      isActive: true,
    };

    const selectedAdmin = this.registrationForm.get('adminList')?.value;

    let adminData: admin[] = [];

    const localStorageData = localStorage.getItem('users');
    if (localStorageData !== null) {
      adminData = JSON.parse(localStorageData);
    }

    const adminIndex = adminData.findIndex(
      (admin) => admin.firstName === selectedAdmin
    );
    if (adminIndex !== -1) {
      adminData[adminIndex].users.push(newUser);
      localStorage.setItem('users', JSON.stringify(adminData));
      alert('Successfully registered as user.');
      this.registrationForm.reset();
      this.router.navigate(['/login']);
    }
  }

  private checkAndCreateAdminData(): void {
    const localStorageData = localStorage.getItem('users');
    if (!localStorageData || localStorageData.trim() === '') {
      const newAdmin: admin = {
        firstName: 'Admin',
        lastName: 'Admin',
        email: 'admin@example.com',
        password: 'Admin@123',
        confirmPassword: 'Admin@123',
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
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[@])(?=.*\\d)[A-Za-z@0-9]{6,12}$'
          ),
        ],
      ],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]],
      gender: ['', Validators.required],
      hobbies: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  private passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    const password = control.parent?.get('password')?.value;
    const confirmPassword = control.value;

    this.registrationForm
      ?.get('password')
      ?.valueChanges.subscribe((newValue) => {
        if (newValue !== confirmPassword) {
          control.setErrors({ passwordMismatch: true });
        } else {
          control.setErrors(null);
        }
      });

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  };

  public onRoleChange(): void {
    const selectedRole: string = this.registrationForm.get('role')?.value;
    if (selectedRole === 'User') {
      this.registrationForm.addControl(
        'adminList',
        new FormControl('', [Validators.required])
      );

      // Retrieve admin data from localStorage
      const localStorageData = localStorage.getItem('users');
      if (localStorageData) {
        const adminData: admin[] = JSON.parse(localStorageData);
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
