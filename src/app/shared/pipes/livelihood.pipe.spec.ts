import { LivelihoodPipe } from './livelihood.pipe';
import { LanguageService } from 'src/app/core/language/language.service';
import { async, TestBed } from '@angular/core/testing';
import { LivelihoodService } from '../../core/api/livelihood.service';
import { SettingsComponent } from '../../components/settings/settings.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { AuthenticationMockService } from '../../core/api/mock/authentication-mock.service';
import { CountrySpecificService } from '../../core/api/country-specific.service';
import { CountrySpecificMockService } from '../../core/api/mock/country-specific-mock.service';
import { DistributionService } from '../../core/api/distribution.service';
import { DistributionMockService } from '../../core/api/mock/distribution-mock.service';
import { DonorService } from '../../core/api/donor.service';
import { DonorMockService } from '../../core/api/mock/donor-mock.service';
import { FinancialProviderService } from '../../core/api/financial-provider.service';
import { FinancialProviderMockService } from '../../core/api/mock/financial-provider-mock.service';
import { LocationService } from '../../core/api/location.service';
import { LocationMockService } from '../../core/api/mock/location-mock.service';
import { OrganizationService } from '../../core/api/organization.service';
import { OrganizationMockService } from '../../core/api/mock/organization-mock.service';
import { SettingsService } from '../../core/api/settings.service';
import { SettingsMockService } from '../../core/api/mock/settings-mock.service';
import { ProductService } from '../../core/api/product.service';
import { ProductMockService } from '../../core/api/mock/product-mock.service';
import { ProjectService } from '../../core/api/project.service';
import { ProjectMockService } from '../../core/api/mock/project-mock.service';
import { VendorsService } from '../../core/api/vendors.service';
import { VendorsMockService } from '../../core/api/mock/vendors-mock.service';
import { UserService } from '../../core/api/user.service';
import { UserMockService } from '../../core/api/mock/user-mock.service';
import { LivelihoodMockService } from '../../core/api/mock/livelihood-mock.service';

describe('LivelihoodPipe', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        MatSnackBarModule,
      ],
      providers: [
        { provide: LivelihoodService, useClass: LivelihoodMockService },
        { provide: CountrySpecificService, useClass: CountrySpecificMockService },
      ],
    }).compileComponents();
  }));

  it('create an instance', () => {
    const pipe = new LivelihoodPipe(
      TestBed.inject(LanguageService),
      TestBed.inject(LivelihoodService)
    );
    expect(pipe).toBeTruthy();
  });
});
