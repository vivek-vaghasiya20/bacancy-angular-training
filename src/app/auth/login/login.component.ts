import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber, Subscription, take } from 'rxjs';
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
    this.authService
      .loginUser(this.loginForm.value)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          if (response.status === 200) {
            alert('You logged successFully');
            this.userEmail = this.loginForm.get('email')?.value;
            localStorage.setItem('userEmail', this.userEmail);
            this.route.navigate(['/dashboard']);
          } else if (response.status === 404) {
            alert(response.message);
          } else if (response.status === 401) {
            alert(response.message);
          } else {
            alert(response.message);
          }
        },
        error: (err) => {
          if (err.status === 0) {
            alert('Network error');
          }
        },
      });
  }
}
