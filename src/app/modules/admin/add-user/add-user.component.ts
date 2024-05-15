import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegex, passwordRegex } from 'src/app/const/const';
import { User } from 'src/app/interface/User.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';
import { passwordMatchValidator } from 'src/app/validations/password-match.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  public userForm!: FormGroup;
  public genders: string[] = ['Male', 'Female', 'Third gender'];
  public hobbies: string[] = ['Cricket', 'Chess', 'Badminton', 'Coding'];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    if (this.userForm.valid) {
      let newUser: User = {
        ...this.userForm.getRawValue(),
        password: this.localStorageService.encryptPassword(
          this.userForm.get('password')?.value
        ),
        confirmPassword: this.localStorageService.encryptPassword(
          this.userForm.get('confirmPassword')?.value
        ),
        role: 'user',
        isActive: true,
        members: [],
      };
      const adminEmail = this.localStorageService.getLogInEmail();

      if (adminEmail) {
        const email = this.userForm.get('email')?.value;
        if (this.userService.checkEmailExistence(email)) {
          Swal.fire('This email already exists in the database.');
        } else {
          this.userService.addNewUser(newUser, adminEmail);
          Swal.fire('Successfully registered user.');
          this.userForm.reset();
        }
      } else {
        this.router.navigate(['/login']);
      }
    } else {
      Swal.fire('Invalid form value.');
    }
  }

  private initializeForm(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      confirmPassword: ['', [Validators.required, passwordMatchValidator]],
      gender: ['', Validators.required],
      hobbies: ['', Validators.required],
      role: ['user', Validators.required],
    });
  }
}
