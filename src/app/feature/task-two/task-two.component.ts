import { Component, WritableSignal, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamSignal } from 'src/app/interface/team.model';


@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.scss'],
})
export class TaskTwoComponent {
  public objectFormGroup: FormGroup;

  //object signal
  public signalFour: WritableSignal<TeamSignal> = signal<TeamSignal>({
    firstTeam: 'KKR',
    secondTeam: 'SRH',
  });

  constructor(public fb: FormBuilder) {
    this.objectFormGroup = this.fb.group({
      firstTeam: [null],
      secondTeam: [null],
    });
  }

  // Function to set object signal (signalFour)
  public setObjectSignal(): void {
    this.signalFour.set({
      firstTeam: this.objectFormGroup.controls['firstTeam'].value,
      secondTeam: this.objectFormGroup.controls['secondTeam'].value,
    });
  }

  // Function to update object signal (signalFour)
  public updateObjectSignal(): void {
    this.signalFour.update((currentValue) => ({
      ...currentValue,
      firstTeam: this.objectFormGroup.controls['firstTeam'].value,
      secondTeam: this.objectFormGroup.controls['secondTeam'].value,
    }));
  }

  // Function to mutate object signal (signalFour)
  public mutateObjectSignal(): void {
    this.signalFour.mutate((t) => {
      t.firstTeam = this.objectFormGroup.controls['firstTeam'].value;
      t.secondTeam = this.objectFormGroup.controls['secondTeam'].value;
    });
  }

  //array of object
  public signalFive: WritableSignal<{ newTeam: string }[]> = signal<
    { newTeam: string }[]
  >([
    { newTeam: 'KKR' },
    { newTeam: 'SRH' },
    { newTeam: 'RR' },
    { newTeam: 'RCB' },
  ]);

  // Function to mutate array of objects signal (signalFive)
  public mutateArraySignal(): void {
    this.signalFive.mutate((t) => t.push({ newTeam: 'GT' }));
  }
}
