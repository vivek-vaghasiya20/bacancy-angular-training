import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bacancy-angular-training';

  @ViewChild('formObject') formData!: NgForm;

  public onFormSubmit(): void {
    console.log(this.formData);
  }
}
