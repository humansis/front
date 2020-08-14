import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotValidatedDistributionComponent } from './not-validated-distribution.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../app-injector';
import { Distribution } from '../../../../models/distribution';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { BeneficiariesService } from '../../../../core/api/beneficiaries.service';
import { BeneficiariesMockService } from '../../../../core/api/mock/beneficiaries-mock.service';
import { DistributionService } from '../../../../core/api/distribution.service';
import { DistributionMockService } from '../../../../core/api/mock/distribution-mock.service';
import { UserService } from '../../../../core/api/user.service';
import { UserMockService } from '../../../../core/api/mock/user-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AsyncacheService } from '../../../../core/storage/asyncache.service';
import { AsyncacheMockService } from '../../../../core/api/mock/asyncache-mock.service';
import { HouseholdsService } from '../../../../core/api/households.service';
import { HouseholdsMockService } from '../../../../core/api/mock/households-mock.service';

describe('NotValidatedDistributionComponent', () => {
  let component: NotValidatedDistributionComponent;
  let fixture: ComponentFixture<NotValidatedDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotValidatedDistributionComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatDialogModule,
      ],
      providers: [
        { provide: AsyncacheService, useClass: AsyncacheMockService },
        { provide: BeneficiariesService, useClass: BeneficiariesMockService },
        { provide: DistributionService, useClass: DistributionMockService },
        { provide: HouseholdsService, useClass: HouseholdsMockService },
        { provide: UserService, useClass: UserMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(NotValidatedDistributionComponent);
    component = fixture.componentInstance;
    component.actualDistribution = new Distribution();
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
