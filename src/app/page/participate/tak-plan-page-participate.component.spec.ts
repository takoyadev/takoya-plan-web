import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakPlanPageParticipateComponent } from './tak-plan-page-participate.component';

describe('DetailComponent', () => {
  let component: TakPlanPageParticipateComponent;
  let fixture: ComponentFixture<TakPlanPageParticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanPageParticipateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanPageParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
