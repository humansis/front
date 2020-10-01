import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdLocationComponent } from './household-location.component';

describe('HouseholdLocationComponent', () => {
  let component: HouseholdLocationComponent;
  let fixture: ComponentFixture<HouseholdLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HouseholdLocationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
