import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { admin } from 'src/app/interface/admin.interface';
import { member } from 'src/app/interface/member.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent {
  public memberForm!: FormGroup;
  public genders: string[] = ['Male', 'Female', 'Third gender'];
  public hobbies: string[] = ['Cricket', 'Chess', 'Badminton', 'Coding'];
  public roleOfMember: string[] = [
    'Production Worker',
    'Quality Control Inspector',
    'Machine Operator',
    'Team Leader',
    'Safety Officer',
    'Supply Chain Manager',
  ];

  private userEmail: string | null = '';

  constructor(private localStorageService: LocalStorageService) {}

  public ngOnInit(): void {
    this.userEmail = this.localStorageService.getLogInEmail();
    this.initializeForm();
  }

  public initializeForm(): void {
    this.memberForm = new FormGroup({
      members: new FormArray([]),
    });
    this.addMember();
  }

  public addMember(): void {
    (<FormArray>this.memberForm.get('members')).push(this.createMember());
  }

  public createMember(): FormGroup {
    return new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        this.whiteSpaceValidator,
      ]),
      lastName: new FormControl('', [
        Validators.required,
        this.whiteSpaceValidator,
      ]),
      email: new FormControl('', [
        Validators.required,
        this.emailExistenceValidator.bind(this),
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ]),
      gender: new FormControl('', [Validators.required]),
      hobbies: new FormControl(''),
      role: new FormControl('', [Validators.required]),
      salary: new FormControl(null, [Validators.required]),
      contactNumber: new FormControl('', [
        Validators.required,
        this.contactNumberValidator,
      ]),
    });
  }

  public getMemberControl(): AbstractControl[] {
    return (<FormArray>this.memberForm.get('members')).controls;
  }

  public removeMember(index: number): void {
    (<FormArray>this.memberForm.get('members')).removeAt(index);
  }

  public onSubmit(): void {
    const members: member[] = [];

    this.getMemberControl().forEach((memberControl) => {
      const memberData: member = {
        firstName: memberControl.get('firstName')?.value,
        lastName: memberControl.get('lastName')?.value,
        email: memberControl.get('email')?.value,
        gender: memberControl.get('gender')?.value,
        hobbies: memberControl.get('hobbies')?.value,
        role: memberControl.get('role')?.value,
        salary: memberControl.get('salary')?.value,
        contactNumber: memberControl.get('contactNumber')?.value,
      };

      members.push(memberData);
    });

    this.addMemberToUser(this.userEmail, members);
    this.memberForm.reset();
    (this.memberForm.get('members') as FormArray).clear();
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

  private contactNumberValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const validPhoneNumberRegex: RegExp = /^[6-9]\d{9}$/;
    const contactNumber: string = control.value;
    if (!contactNumber || validPhoneNumberRegex.test(contactNumber)) {
      return null;
    } else {
      return { invalidContactNumber: true };
    }
  }

  private emailExistenceValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    debugger;
    const members = this.getMemberControl();
    const memberEmailExist = members.some((memberControl) => {
      if (control !== memberControl.get('email')) {
        return memberControl.get('email')?.value === control.value;
      } else return false;
    });

    if (
      this.localStorageService.checkEmailExistence(control.value) ||
      memberEmailExist
    ) {
      return { isEmailExist: true };
    } else {
      return null;
    }
  }

  public isSubmitDisabled(): boolean {
    const membersArray = <FormArray>this.memberForm.get('members');
    return membersArray.length === 0 || this.memberForm.invalid;
  }

  public addMemberToUser(userEmail: string | null, members: member[]): void {
    let adminData: admin[] = this.localStorageService.getUserData();

    for (const admin of adminData) {
      for (const user of admin.users) {
        if (user.email === userEmail) {
          user.members = user.members.concat(members);
          break;
        }
      }
    }
    this.localStorageService.setUserData(adminData);
  }
}
