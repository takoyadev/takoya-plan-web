import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakPlanPageHomeComponent } from './tak-plan-page-home.component';

describe('HomeComponent', () => {
  let component: TakPlanPageHomeComponent;
  let fixture: ComponentFixture<TakPlanPageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanPageHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
