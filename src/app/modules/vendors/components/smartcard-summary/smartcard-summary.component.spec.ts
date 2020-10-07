import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcardSummaryComponent } from './smartcard-summary.component';

describe('SmartcardSummaryComponent', () => {
  let component: SmartcardSummaryComponent;
  let fixture: ComponentFixture<SmartcardSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmartcardSummaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartcardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
