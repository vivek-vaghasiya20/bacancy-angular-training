import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public userName: string = '';
  public passWord: string = '';

  constructor(private authService: AuthService, private route: Router) {}

  public onSubmit(): void {
    if (this.userName !== '' && this.passWord !== '') {
      this.authService.login(this.userName, this.passWord);
      this.route.navigate(['posts', 'createPost']);
    } else {
      alert('Please enter Your Valid Credential');
    }
  }
}
