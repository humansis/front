import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcardRedemptionComponent } from './smartcard-redemption.component';

describe('SmartcardRedemptionComponent', () => {
  let component: SmartcardRedemptionComponent;
  let fixture: ComponentFixture<SmartcardRedemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartcardRedemptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartcardRedemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
