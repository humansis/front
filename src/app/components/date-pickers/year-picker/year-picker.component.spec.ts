import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearPickerComponent } from './year-picker.component';
import { FormControl } from '@angular/forms';

describe('YearPickerComponent', () => {
  let component: YearPickerComponent;
  let fixture: ComponentFixture<YearPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YearPickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearPickerComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
