import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'bacancy-angular-training';
  public companyForm!: FormGroup;
  public formValue!: any;
  public isShowData: boolean = false;
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
        validators: [Validators.required],
        asyncValidators: [this.projectNameValidator.bind(this)],
      }),
      description: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
    });
    (this.companyForm.get('projects') as FormArray).push(projectFormGroup);
  }

  public getProjectControl() {
    return (<FormArray>this.companyForm.get('projects')).controls;
  }

  public removeProject(index: number): void {
    (this.companyForm.get('projects') as FormArray).removeAt(index);
  }

  public onSubmit(): void {
    this.formValue = this.companyForm.value;
    this.isShowData = true;
    this.companyForm.reset();
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
    const projectName = control.value;
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
}
