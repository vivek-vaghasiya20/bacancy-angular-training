import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: [
        '',
        [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)],
      ],
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
            '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
      dateOfBirth: ['', Validators.required],
      totalMatchesPlayed: [null],
      height: [null],
      weight: [null],
    });
  }

  public onSubmit(): void {
    this.authService.registerUser(this.registrationForm.value).subscribe({
      next: (response) => {
        console.log(
          '%csrcappauth\register\register.component.ts:61 response',
          'color: #007acc;',
          response
        );
      },
      error: (err) => {
        console.log(
          '%csrcappauth\register\register.component.ts:64 err',
          'color: #007acc;',
          err
        );
      },
    });
  }
}
