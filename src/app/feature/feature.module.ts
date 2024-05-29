import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskOneChildComponent } from './task-one-child/task-one-child.component';
import { TaskOneParentComponent } from './task-one-parent/task-one-parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskOneChildComponent, TaskOneParentComponent],
  imports: [CommonModule, FormsModule],
  exports: [TaskOneParentComponent, TaskOneChildComponent],
})
export class FeatureModule {}
