import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidatedDistributionComponent } from './validated-distribution.component';
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
import { AsyncacheService } from '../../../../core/storage/asyncache.service';
import { AsyncacheMockService } from '../../../../core/api/mock/asyncache-mock.service';
import { UserService } from '../../../../core/api/user.service';
import { UserMockService } from '../../../../core/api/mock/user-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';

describe('ValidatedDistributionComponent', () => {
  let component: ValidatedDistributionComponent;
  let fixture: ComponentFixture<ValidatedDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatDialogModule,
        MatIconModule,
      ],
      declarations: [ValidatedDistributionComponent],
      providers: [
        { provide: BeneficiariesService, useClass: BeneficiariesMockService },
        { provide: DistributionService, useClass: DistributionMockService },
        { provide: AsyncacheService, useClass: AsyncacheMockService },
        { provide: UserService, useClass: UserMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ValidatedDistributionComponent);
    component = fixture.componentInstance;
    component.actualDistribution = new Distribution();
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
