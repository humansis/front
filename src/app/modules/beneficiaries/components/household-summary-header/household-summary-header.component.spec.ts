import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdSummaryHeaderComponent } from './household-summary-header.component';

describe('HouseholdSummaryHeaderComponent', () => {
  let component: HouseholdSummaryHeaderComponent;
  let fixture: ComponentFixture<HouseholdSummaryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HouseholdSummaryHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdSummaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
