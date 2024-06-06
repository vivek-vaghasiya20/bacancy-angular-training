import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskOneChildComponent } from './task-one-child/task-one-child.component';
import { TaskOneParentComponent } from './task-one-parent/task-one-parent.component';
import { TaskThreeComponent } from './task-three/task-three.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { TaskFourComponent } from './task-four/task-four.component';

@NgModule({
  declarations: [
    TaskOneChildComponent,
    TaskOneParentComponent,
    TaskTwoComponent,
    TaskThreeComponent,
    TaskFourComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    TaskOneParentComponent,
    TaskOneChildComponent,
    TaskTwoComponent,
    TaskThreeComponent,
    TaskFourComponent,
  ],
})
export class FeatureModule {}
