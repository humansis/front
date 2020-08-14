import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPickerComponent } from './month-picker.component';
import { FormControl } from '@angular/forms';

describe('MonthPickerComponent', () => {
  let component: MonthPickerComponent;
  let fixture: ComponentFixture<MonthPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthPickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPickerComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
