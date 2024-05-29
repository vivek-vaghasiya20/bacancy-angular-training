import {
  Component,
  OnInit,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamSignal } from './interface/team.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public newSignalOne: string = '';
  public newSignalTwo: number = 0;
  public newSignalThree: boolean = false;
  public objectFormGroup: FormGroup;
  public arrayFormGroup: FormGroup;
  public teamName = signal('');

  constructor(public fb: FormBuilder) {
    //show alert on value change

    effect(() => {
      if (this.teamName()) {
        alert(this.teamName());
      }
    });

    this.objectFormGroup = this.fb.group({
      firstTeam: [null],
      secondTeam: [null],
    });

    this.arrayFormGroup = this.fb.group({
      newTeam: [null],
    });
  }

  ngOnInit(): void {}

  //object signal
  public signalFour = signal<TeamSignal>({
    firstTeam: 'KKR',
    secondTeam: 'SRH',
  });

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
  public signalFive = signal<object[]>([
    { firstTeam: 'KKR' },
    { secondTeam: 'SRH' },
    { thirdTeam: 'RR' },
    { fourthTeam: 'RCB' },
  ]);

  // Function to mutate array of objects signal (signalFive)
  public mutateArraySignal(): void {
    this.signalFive.mutate((t) =>
      t.push({ newTeam: this.arrayFormGroup.controls['newTeam'].value })
    );
  }

  // Pass Signal to Child Component
}
