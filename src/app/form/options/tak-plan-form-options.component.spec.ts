import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TakPlanFormOptionsComponent} from './tak-plan-form-options.component';

describe('OptionsPickerComponent', () => {
  let component: TakPlanFormOptionsComponent;
  let fixture: ComponentFixture<TakPlanFormOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanFormOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanFormOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
