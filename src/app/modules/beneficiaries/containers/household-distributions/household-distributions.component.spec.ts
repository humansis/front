import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseholdDistributionsComponent } from 'src/app/modules/beneficiaries/containers/household-distributions/household-distributions.component';
import { DistributionService } from 'src/app/core/api/distribution.service';
import { DistributionMockService } from 'src/app/core/api/mock/distribution-mock.service';
import { DatePipe, DecimalPipe } from '@angular/common';

describe('BeneficiaryDistributionsComponent', () => {
  let component: HouseholdDistributionsComponent;
  let fixture: ComponentFixture<HouseholdDistributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DistributionService, useClass: DistributionMockService },
        DatePipe,
        DecimalPipe,
      ],
      declarations: [HouseholdDistributionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdDistributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
