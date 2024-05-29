import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOneParentComponent } from './task-one-parent.component';

describe('TaskOneParentComponent', () => {
  let component: TaskOneParentComponent;
  let fixture: ComponentFixture<TaskOneParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskOneParentComponent]
    });
    fixture = TestBed.createComponent(TaskOneParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
