import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakPlanNavSidebarComponent } from './tak-plan-nav-sidebar.component';

describe('SidebarComponent', () => {
  let component: TakPlanNavSidebarComponent;
  let fixture: ComponentFixture<TakPlanNavSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakPlanNavSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakPlanNavSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
