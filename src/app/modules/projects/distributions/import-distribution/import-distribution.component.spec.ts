import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDistributionComponent } from './import-distribution.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { UppercaseFirstPipe } from '../../../../shared/pipes/uppercase-first.pipe';
import { HouseholdsService } from '../../../../core/api/households.service';
import { HouseholdsMockService } from '../../../../core/api/mock/households-mock.service';
import { BeneficiariesService } from '../../../../core/api/beneficiaries.service';
import { BeneficiariesMockService } from '../../../../core/api/mock/beneficiaries-mock.service';
import { DistributionService } from '../../../../core/api/distribution.service';
import { DistributionMockService } from '../../../../core/api/mock/distribution-mock.service';
import { UserService } from '../../../../core/api/user.service';
import { UserMockService } from '../../../../core/api/mock/user-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ImportDistributionComponent', () => {
  let component: ImportDistributionComponent;
  let fixture: ComponentFixture<ImportDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImportDistributionComponent, UppercaseFirstPipe],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatDialogModule,
      ],
      providers: [
        { provide: HouseholdsService, useClass: HouseholdsMockService },
        { provide: DistributionService, useClass: DistributionMockService },
        { provide: UserService, useClass: UserMockService },
        { provide: BeneficiariesService, useClass: BeneficiariesMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ImportDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
