import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceIndicatorCardComponent } from './performance-indicator-card.component';

describe('PerformanceIndicatorCardComponent', () => {
  let component: PerformanceIndicatorCardComponent;
  let fixture: ComponentFixture<PerformanceIndicatorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceIndicatorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceIndicatorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
