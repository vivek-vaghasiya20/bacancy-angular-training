import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('formObject') formData!: NgForm;
  public onSubmit(): void {
    console.log(
      '%csrcappauthloginlogin.component.ts:12 this.formData',
      'color: #007acc;',
      this.formData
    );
  }
}
