import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakPlanSnackUnimplementedComponent } from './tak-plan-snack-unimplemented.component';

describe('UnimplementedComponent', () => {
  let component: TakPlanSnackUnimplementedComponent;
  let fixture: ComponentFixture<TakPlanSnackUnimplementedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanSnackUnimplementedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanSnackUnimplementedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
