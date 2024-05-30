import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketComponent } from './cricket.component';

describe('CricketComponent', () => {
  let component: CricketComponent;
  let fixture: ComponentFixture<CricketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CricketComponent]
    });
    fixture = TestBed.createComponent(CricketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
