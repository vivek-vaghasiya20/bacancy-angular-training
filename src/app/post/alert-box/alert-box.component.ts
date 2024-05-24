import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss'],
})
export class AlertBoxComponent {
  alertMessage!: string;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  public onClose(): void {
    this.close.emit();
  }
}
