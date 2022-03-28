import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakPlanNavToolbarComponent } from './tak-plan-nav-toolbar.component';

describe('ToolbarComponent', () => {
  let component: TakPlanNavToolbarComponent;
  let fixture: ComponentFixture<TakPlanNavToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanNavToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanNavToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
