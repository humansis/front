import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../app-injector';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableDataSource } from '@angular/material/table';
import { CustomModel } from '../../models/custom-models/custom-model';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { AuthenticationMockService } from '../../core/api/mock/authentication-mock.service';
import { FinancialProviderService } from '../../core/api/financial-provider.service';
import { LocationService } from '../../core/api/location.service';
import { LocationMockService } from '../../core/api/mock/location-mock.service';
import { SettingsService } from '../../core/api/settings.service';
import { ProductService } from '../../core/api/product.service';
import { VendorsService } from '../../core/api/vendors.service';
import { FinancialProviderMockService } from '../../core/api/mock/financial-provider-mock.service';
import { SettingsMockService } from '../../core/api/mock/settings-mock.service';
import { ProductMockService } from '../../core/api/mock/product-mock.service';
import { VendorsMockService } from '../../core/api/mock/vendors-mock.service';
import { ProjectService } from '../../core/api/project.service';
import { ProjectMockService } from '../../core/api/mock/project-mock.service';
import { DistributionService } from '../../core/api/distribution.service';
import { DistributionMockService } from '../../core/api/mock/distribution-mock.service';
import { DonorService } from '../../core/api/donor.service';
import { DonorMockService } from '../../core/api/mock/donor-mock.service';
import { UserService } from '../../core/api/user.service';
import { UserMockService } from '../../core/api/mock/user-mock.service';
import { CountrySpecificService } from '../../core/api/country-specific.service';
import { CountrySpecificMockService } from '../../core/api/mock/country-specific-mock.service';
import { OrganizationService } from '../../core/api/organization.service';
import { OrganizationMockService } from '../../core/api/mock/organization-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        MatSnackBarModule,
      ],
      providers: [
        { provide: AuthenticationService, useClass: AuthenticationMockService },
        { provide: CountrySpecificService, useClass: CountrySpecificMockService },
        { provide: DistributionService, useClass: DistributionMockService },
        { provide: DonorService, useClass: DonorMockService },
        { provide: FinancialProviderService, useClass: FinancialProviderMockService },
        { provide: LocationService, useClass: LocationMockService },
        { provide: OrganizationService, useClass: OrganizationMockService },
        { provide: SettingsService, useClass: SettingsMockService },
        { provide: ProductService, useClass: ProductMockService },
        { provide: ProjectService, useClass: ProjectMockService },
        { provide: VendorsService, useClass: VendorsMockService },
        { provide: UserService, useClass: UserMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    component.data = new MatTableDataSource<CustomModel>();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
