import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesStatsCardComponent } from './employees-stats-card.component';

describe('EmployeesStatsCardComponent', () => {
  let component: EmployeesStatsCardComponent;
  let fixture: ComponentFixture<EmployeesStatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesStatsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
