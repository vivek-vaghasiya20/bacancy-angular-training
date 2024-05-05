import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-confirm-dialog-box',
  templateUrl: './confirm-dialog-box.component.html',
  styleUrls: ['./confirm-dialog-box.component.scss'],
})
export class ConfirmDialogBoxComponent {
  @Output() confirmed = new EventEmitter<boolean>();
  @ViewChild('confirmationModal') confirmationModal!: ElementRef;

  public onDeleteConfirmed(confirm: boolean): void {
    this.confirmed.emit(confirm);
  }
}
