import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakPlanPickerOptionsCalendarComponent } from './tak-plan-picker-options-calendar.component';

describe('CalendarOptionsPickerComponent', () => {
  let component: TakPlanPickerOptionsCalendarComponent;
  let fixture: ComponentFixture<TakPlanPickerOptionsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanPickerOptionsCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanPickerOptionsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
