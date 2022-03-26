import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarOptionsPickerComponent } from './calendar-options-picker.component';

describe('CalendarOptionsPickerComponent', () => {
  let component: CalendarOptionsPickerComponent;
  let fixture: ComponentFixture<CalendarOptionsPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarOptionsPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarOptionsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
