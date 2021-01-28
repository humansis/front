import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtcDatepickerComponent } from './utc-datepicker.component';
import { MatInputModule } from '@angular/material/input';

describe('UtcDatepickerComponent', () => {
  let component: UtcDatepickerComponent;
  let fixture: ComponentFixture<UtcDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UtcDatepickerComponent],
      imports: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtcDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
