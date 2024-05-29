import { Component, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup } from '@angular/forms';
import { UserForm } from 'src/app/interface/user-form.model';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.scss'],
})
export class TaskThreeComponent {
  public userForm: FormGroup;
  public formValueChanges: WritableSignal<UserForm>;

  constructor() {
    this.userForm = new FormGroup({
      personName: new FormControl(null),
      collegeName: new FormControl(null),
      companyName: new FormControl(null),
    });
    this.formValueChanges = toSignal(
      this.userForm.valueChanges
    ) as WritableSignal<UserForm>;
  }
}
