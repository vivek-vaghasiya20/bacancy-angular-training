import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-task-four',
  templateUrl: './task-four.component.html',
  styleUrls: ['./task-four.component.scss'],
})
export class TaskFourComponent {
  public firstName: WritableSignal<string> = signal<string>('');
  public lastName: WritableSignal<string> = signal<string>('');

  public changeName(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.firstName.set(inputElement.value);
  }
}
