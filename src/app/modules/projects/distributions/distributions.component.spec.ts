import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionsComponent } from './distributions.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { BeneficiariesService } from '../../../core/api/beneficiaries.service';
import { BeneficiariesMockService } from '../../../core/api/mock/beneficiaries-mock.service';
import { DistributionService } from '../../../core/api/distribution.service';
import { DistributionMockService } from '../../../core/api/mock/distribution-mock.service';
import { AsyncacheService } from '../../../core/storage/asyncache.service';
import { AsyncacheMockService } from '../../../core/api/mock/asyncache-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../../core/api/user.service';
import { UserMockService } from '../../../core/api/mock/user-mock.service';

describe('DistributionsComponent', () => {
  let component: DistributionsComponent;
  let fixture: ComponentFixture<DistributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DistributionsComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatDialogModule,
      ],
      providers: [
        { provide: BeneficiariesService, useClass: BeneficiariesMockService },
        { provide: AsyncacheService, useClass: AsyncacheMockService },
        { provide: DistributionService, useClass: DistributionMockService },
        { provide: UserService, useClass: UserMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(DistributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
