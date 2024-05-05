import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimDialogBoxComponent } from './confim-dialog-box.component';

describe('ConfimDialogBoxComponent', () => {
  let component: ConfimDialogBoxComponent;
  let fixture: ComponentFixture<ConfimDialogBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfimDialogBoxComponent]
    });
    fixture = TestBed.createComponent(ConfimDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
