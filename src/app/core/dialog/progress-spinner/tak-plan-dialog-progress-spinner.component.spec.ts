import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakPlanDialogProgressSpinnerComponent } from './tak-plan-dialog-progress-spinner.component';

describe('ProgressSpinnerDialogComponent', () => {
  let component: TakPlanDialogProgressSpinnerComponent;
  let fixture: ComponentFixture<TakPlanDialogProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanDialogProgressSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanDialogProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
