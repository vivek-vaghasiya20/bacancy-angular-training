import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOneChildComponent } from './task-one-child.component';

describe('TaskOneChildComponent', () => {
  let component: TaskOneChildComponent;
  let fixture: ComponentFixture<TaskOneChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskOneChildComponent]
    });
    fixture = TestBed.createComponent(TaskOneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
