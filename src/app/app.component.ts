import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bacancy-angular-training';

  public showSubmittedData: boolean = false;
  public defaultGender: string = 'male';
  public user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    gender: '',
    city: '',
  };
  @ViewChild('formObject') formData!: NgForm;

  public fillForm(): void {
    this.formData.form.setValue({
      firstName: 'Vivek',
      lastName: 'Vaghasiya',
      email: 'vivek@example.com',
      phoneNumber: 7485969685,
      password: 'Vivek21',
      gender: 'male',
      city: 'surat',
      remember_me: true,
    });
  }

  public patchForm(): void {
    this.formData.form.patchValue({
      firstName: 'Vinay',
      lastName: 'Vaghasiya',
      email: 'vinay@example.com',
    });
  }

  public onFormSubmit(): void {
    this.user.firstName = this.formData.value.firstName;
    this.user.lastName = this.formData.value.lastName;
    this.user.email = this.formData.value.email;
    this.user.phoneNumber = this.formData.value.phoneNumber;
    this.user.gender = this.formData.value.gender;
    this.user.city = this.formData.value.city;
    this.showSubmittedData = true;
    this.formData.reset();
  }

  public onFormReset(): void {
    this.formData.reset();
    this.showSubmittedData = false;
  }
}
