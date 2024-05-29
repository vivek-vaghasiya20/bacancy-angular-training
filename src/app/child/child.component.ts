import { Component, Input, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() signalInChild = signal('vivek');
  public FormGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.FormGroup = this.fb.group({
      newValue: [''],
    });
    this.onValueChanges();
  }

  private onValueChanges(): void {
    this.FormGroup.valueChanges.subscribe((value) => this.signalInChild.set(value.newValue));
    // this.FormGroup.get('newValue')?.valueChanges.forEach((value) => {
    //   this.signalInChild.set(value);
    // });
  }
}
