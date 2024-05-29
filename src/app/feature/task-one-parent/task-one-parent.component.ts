import { Component, WritableSignal, effect, signal } from '@angular/core';

@Component({
  selector: 'app-task-one-parent',
  templateUrl: './task-one-parent.component.html',
  styleUrls: ['./task-one-parent.component.scss'],
})
export class TaskOneParentComponent {
  //string signal
  public signalOne: WritableSignal<string> = signal<string>('vivek');

  //number signal
  public signalTwo: WritableSignal<number> = signal<number>(0);

  //boolean signal
  public signalThree: WritableSignal<boolean> = signal<boolean>(true);

  constructor() {
    effect(() => {
      if (this.signalTwo()) {
        alert(this.signalTwo());
      }
    });
  }

  //Function to Update signal
  // public updateValue(newValue: any): void {
  //   // this.signalOne.set()
  //   this.signalOne.update((value) => value + ' ' + newValue);
  //   // this.signalTwo.update((value) => value + this.newSignalTwo);
  //   // this.signalThree.update(() => this.newSignalThree);
  // }
}
