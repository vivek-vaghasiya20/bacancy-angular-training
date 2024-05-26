import { Component, OnInit, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface TeamSignal {
  firstTeam: string;
  secondTeam: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public newSignalOne: string = '';
  public newSignalTwo: number = 0;
  public newSignalThree: boolean = false;
  public objectFormGroup!: FormGroup;
  public arrayFormGroup!: FormGroup;

  constructor(public fb: FormBuilder) {
    //show alert on value change
    effect(() => alert(this.teamName()));
  }

  ngOnInit(): void {
    this.initializeForms();
  }

  private initializeForms(): void {
    this.objectFormGroup = this.fb.group({
      firstTeam: [''],
      secondTeam: [''],
    });

    this.arrayFormGroup = this.fb.group({
      newTeam: [''],
    });
  }

  //string signal
  public signalOne = signal<string>('vivek');

  //number signal
  public signalTwo = signal<number>(1);

  //boolean signal
  public signalThree = signal<boolean>(true);

  //Function to Update signal
  public updateValues(): void {
    this.signalOne.update((value) => value + ' ' + this.newSignalOne);
    this.signalTwo.update((value) => value + this.newSignalTwo);
    this.signalThree.update(() => this.newSignalThree);
  }

  //object signal
  public signalFour = signal<TeamSignal>({
    firstTeam: 'KKR',
    secondTeam: 'SRH',
  });

  // Function to set object signal (signalFour)
  public setObjectSignal(): void {
    this.signalFour.set({ firstTeam: 'RCB', secondTeam: 'MI' });
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
  public teamName = signal('');
}
