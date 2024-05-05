import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogBoxComponent } from './confirm-dialog-box/confirm-dialog-box.component';

@NgModule({
  declarations: [ConfirmDialogBoxComponent],
  imports: [CommonModule],
  exports: [ConfirmDialogBoxComponent],
})
export class CoreModule {}
