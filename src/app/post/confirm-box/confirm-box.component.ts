import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss'],
})
export class ConfirmBoxComponent {
  @Output() succeeded = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  onSuccess() {
    this.succeeded.emit();
  }

  onCancel() {
    this.cancelled.emit();
  }
}
