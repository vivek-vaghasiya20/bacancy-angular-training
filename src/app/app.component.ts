import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public companyForm!: FormGroup;
  public companyFormData!: any;
  public isDisplayCompanyData: boolean = false;

  constructor() {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.companyForm = new FormGroup({
      name: new FormControl('Bacancy Technology', [
        Validators.required,
        this.whiteSpaceValidator,
      ]),
      email: new FormControl('solution@bacancy.com', [
        Validators.required,
        this.emailValidator,
      ]),
      website: new FormControl('bacancytechnology.com', Validators.required),
      companyPhoneNumber: new FormControl('+917896857485', [
        Validators.required,
        this.indianPhoneNumberValidator,
      ]),
      projects: new FormArray([]),
    });
  }

  public addProject(): void {
    const projectFormGroup = new FormGroup({
      projectName: new FormControl('', {
        validators: [Validators.required, this.whiteSpaceValidator],
        asyncValidators: [this.projectNameValidator.bind(this)],
      }),
      description: new FormControl('', Validators.required),
      startDate: new FormControl('', [
        Validators.required,
        this.startDateValidator,
      ]),
      endDate: new FormControl('', [
        Validators.required,
        this.endDateValidator,
      ]),
    });
    (this.companyForm.get('projects') as FormArray).push(projectFormGroup);
  }

  public getProjectsControl(): AbstractControl[] {
    return (<FormArray>this.companyForm.get('projects')).controls;
  }

  public removeProject(index: number): void {
    (this.companyForm.get('projects') as FormArray).removeAt(index);
  }

  public onSubmit(): void {
    this.companyFormData = this.companyForm.value;
    this.isDisplayCompanyData = true;
    (this.companyForm.get('projects') as FormArray).clear();
  }

  private whiteSpaceValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && value.trim() !== value) {
      return { isWhiteSpace: true };
    }
    return null;
  }

  private emailValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }

  private indianPhoneNumberValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const phoneNumberRegex = /^\+91[6-9]\d{9}$/;
    if (!phoneNumberRegex.test(control.value)) {
      return { indianPhoneNumber: true };
    }
    return null;
  }

  private projectNameValidator(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    const projectName = control.value.trim();
    const projects = this.companyForm.get('projects')?.value;
    const projectExists = projects.some(
      (project: any) => project.projectName === projectName
    );

    return new Observable<ValidationErrors | null>((observer) => {
      if (projectExists) {
        observer.next({ projectNameExists: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    });
  }

  private endDateValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const startDate = new Date(control.parent?.get('startDate')?.value);
    const endDate = new Date(control.value);
    if (startDate > endDate) {
      return { isEndDateValid: true };
    }
    return null;
  }

  private startDateValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const endDate = new Date(control.parent?.get('endDate')?.value);
    const startDate = new Date(control.value);
    if (startDate > endDate) {
      return { isStartDateValid: true };
    }
    return null;
  }
}
