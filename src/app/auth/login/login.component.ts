import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public userEmail: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          ),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    this.authService.loginUser(this.loginForm.value).subscribe({
      next: (response) => {
        alert('You logged successFully');
        this.userEmail = this.loginForm.get('email')?.value;
        localStorage.setItem('userEmail', this.userEmail);
        this.route.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login error:', err);
        // Optionally, show a user-friendly error message
      },
    });
  }
}
