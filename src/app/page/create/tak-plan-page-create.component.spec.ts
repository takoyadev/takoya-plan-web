import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakPlanPageCreateComponent } from './tak-plan-page-create.component';

describe('CreateComponent', () => {
  let component: TakPlanPageCreateComponent;
  let fixture: ComponentFixture<TakPlanPageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanPageCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanPageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
