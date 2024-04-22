import { Component, OnInit, inject } from '@angular/core';
import {
  AsyncValidator,
  AsyncValidatorFn,
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
export class AppComponent implements OnInit {
  title = 'bacancy-angular-training';
  public companyForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.companyForm = new FormGroup({
      companyName: new FormControl('Bacancy Technology', Validators.required),
      companyEmail: new FormControl('solution@bacancy.com', [
        Validators.required,
        Validators.email,
      ]),
      companyWebsite: new FormControl(
        'bacancytechnology.com',
        Validators.required
      ),
      companyPhoneNumber: new FormControl('+13474414161', [
        Validators.required,
        this.indianPhoneNumberValidator,
      ]),
      projects: new FormArray([]),
    });
  }

  public addProject(): void {
    const projectFormGroup = new FormGroup({
      projectName: new FormControl('', {
        validators: [Validators.required],
        asyncValidators: [this.projectNameValidator as AsyncValidatorFn],
      }),
      description: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
    });
    (this.companyForm.get('projects') as FormArray).push(projectFormGroup);
    console.log(
      '%csrcappapp.component.ts:58 this.companyForm',
      'color: #007acc;',
      this.companyForm
    );
  }

  public getProjectControl() {
    return (<FormArray>this.companyForm.get('projects')).controls;
  }

  public removeProject(index: number): void {
    (this.companyForm.get('projects') as FormArray).removeAt(index);
    console.log(
      '%csrcappapp.component.ts:71 this.companyForm',
      'color: #007acc;',
      this.companyForm
    );
  }

  public onSubmit(): void {
    console.log(
      '%csrcappapp.component.ts:30 this.companyForm',
      'color: #007acc;',
      this.companyForm
    );
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
    control: FormControl
  ): Observable<ValidationErrors | null> {
    return new Observable<ValidationErrors | null>((observer) => {
      const projectName = control.value;

      console.log(
        '%csrcappapp.component.ts:102 projectName',
        'color: #007acc;',
        projectName
      );

      const projectsArray = this.companyForm.get('projects') as FormArray;

      console.log(
        '%csrcappapp.component.ts:108 projectsArray',
        'color: #007acc;',
        projectsArray
      );

      if (!projectsArray) {
        observer.next(null);
        observer.complete();
        return;
      }

      const projectExists = projectsArray.controls
        .map((projectControl) => projectControl.get('projectName')?.value)
        .includes(projectName);

      console.log(
        '%csrcappapp.component.ts:124 projectExists',
        'color: #007acc;',
        projectExists
      );

      if (projectExists) {
        observer.next({ projectNameExists: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    });
  }
}
