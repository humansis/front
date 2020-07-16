import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../app-injector';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { Household } from '../../models/household';
import { HouseholdsDataSource } from '../../models/data-sources/households-data-source';
import { HouseholdsService } from '../../core/api/households.service';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { AuthenticationMockService } from '../../core/api/mock/authentication-mock.service';
import { FinancialProviderService } from '../../core/api/financial-provider.service';
import { FinancialProviderMockService } from '../../core/api/mock/financial-provider-mock.service';
import { LocationService } from '../../core/api/location.service';
import { LocationMockService } from '../../core/api/mock/location-mock.service';
import { HouseholdsMockService } from '../../core/api/mock/households-mock.service';
import { AsyncacheService } from '../../core/storage/asyncache.service';
import { AsyncacheMockService } from '../../core/api/mock/asyncache-mock.service';
import { DistributionService } from '../../core/api/distribution.service';
import { DistributionMockService } from '../../core/api/mock/distribution-mock.service';
import { UserService } from '../../core/api/user.service';
import { UserMockService } from '../../core/api/mock/user-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        MatSnackBarModule,
      ],
      providers: [
        { provide: AuthenticationService, useClass: AuthenticationMockService },
        { provide: AsyncacheService, useClass: AsyncacheMockService },
        { provide: DistributionService, useClass: DistributionMockService },
        { provide: FinancialProviderService, useClass: FinancialProviderMockService },
        { provide: LocationService, useClass: LocationMockService },
        { provide: HouseholdsService, useClass: HouseholdsMockService },
        { provide: UserService, useClass: UserMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.entity = Household;
    component.data = new HouseholdsDataSource(TestBed.inject(HouseholdsService));
    component.service = TestBed.inject(HouseholdsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
