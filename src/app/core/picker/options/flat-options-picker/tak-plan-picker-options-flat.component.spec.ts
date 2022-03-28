import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakPlanPickerOptionsFlatComponent } from './tak-plan-picker-options-flat.component';

describe('FlatOptionsPickerComponent', () => {
  let component: TakPlanPickerOptionsFlatComponent;
  let fixture: ComponentFixture<TakPlanPickerOptionsFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanPickerOptionsFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanPickerOptionsFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
