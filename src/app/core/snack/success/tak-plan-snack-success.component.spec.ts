import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakPlanSnackSuccessComponent } from './tak-plan-snack-success.component';

describe('ValidateComponent', () => {
  let component: TakPlanSnackSuccessComponent;
  let fixture: ComponentFixture<TakPlanSnackSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanSnackSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanSnackSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
