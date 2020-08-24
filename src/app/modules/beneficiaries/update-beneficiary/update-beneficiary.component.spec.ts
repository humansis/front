import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBeneficiaryComponent } from './update-beneficiary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MdePopoverModule } from '@material-extended/mde';
import { HouseholdsService } from '../../../core/api/households.service';
import { HouseholdsMockService } from '../../../core/api/mock/households-mock.service';
import { LocationService } from '../../../core/api/location.service';
import { LocationMockService } from '../../../core/api/mock/location-mock.service';
import { ProjectService } from '../../../core/api/project.service';
import { ProjectMockService } from '../../../core/api/mock/project-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CriteriaService } from '../../../core/api/criteria.service';
import { CriteriaMockService } from '../../../core/api/mock/criteria-mock.service';
import { AsyncacheService } from '../../../core/storage/asyncache.service';
import { AsyncacheMockService } from '../../../core/api/mock/asyncache-mock.service';

describe('UpdateBeneficiaryComponent', () => {
  let component: UpdateBeneficiaryComponent;
  let fixture: ComponentFixture<UpdateBeneficiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBeneficiaryComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatDialogModule,
        MdePopoverModule,
      ],
      providers: [
        { provide: AsyncacheService, useClass: AsyncacheMockService },
        { provide: LocationService, useClass: LocationMockService },
        { provide: HouseholdsService, useClass: HouseholdsMockService },
        { provide: ProjectService, useClass: ProjectMockService },
        { provide: CriteriaService, useClass: CriteriaMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(UpdateBeneficiaryComponent);
    component = fixture.componentInstance;
    component.formBuilder = new FormBuilder();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
