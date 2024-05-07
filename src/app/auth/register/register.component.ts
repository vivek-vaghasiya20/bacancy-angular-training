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
import { pipe, take } from 'rxjs';

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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
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

  public onSubmit(): void {}

  private passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    const password = control.parent?.get('password')?.value;
    const confirmPassword = control.value;

    this.registrationForm
      ?.get('password')
      ?.valueChanges.subscribe((newValue) => {
        console.log('called');
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
      this.adminList = ['Admin 1', 'Admin 2'];
    } else {
      if (this.registrationForm.get('adminList')) {
        this.registrationForm.removeControl('adminList');
      }
    }
  }
}
