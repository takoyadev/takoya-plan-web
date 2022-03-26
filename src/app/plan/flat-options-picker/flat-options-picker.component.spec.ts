import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatOptionsPickerComponent } from './flat-options-picker.component';

describe('FlatOptionsPickerComponent', () => {
  let component: FlatOptionsPickerComponent;
  let fixture: ComponentFixture<FlatOptionsPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatOptionsPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatOptionsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
