import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakPlanFormProfilComponent } from './tak-plan-form-profil.component';

describe('GuestFormComponent', () => {
  let component: TakPlanFormProfilComponent;
  let fixture: ComponentFixture<TakPlanFormProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanFormProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanFormProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
