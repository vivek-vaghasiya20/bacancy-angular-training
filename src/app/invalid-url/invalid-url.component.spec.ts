import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidUrlComponent } from './invalid-url.component';

describe('InvalidUrlComponent', () => {
  let component: InvalidUrlComponent;
  let fixture: ComponentFixture<InvalidUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidUrlComponent]
    });
    fixture = TestBed.createComponent(InvalidUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
