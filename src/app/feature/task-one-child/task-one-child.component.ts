import { Component, Input, WritableSignal, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-task-one-child',
  templateUrl: './task-one-child.component.html',
  styleUrls: ['./task-one-child.component.scss'],
})
export class TaskOneChildComponent {
  @Input({ required: true }) signalTwoChild: WritableSignal<number> =
    signal<number>(0);
}
