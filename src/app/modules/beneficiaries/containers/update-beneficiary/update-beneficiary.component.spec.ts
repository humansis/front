import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBeneficiaryComponent } from './update-beneficiary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Injector } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MdePopoverModule } from '@material-extended/mde';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AsyncacheService } from 'src/app/core/storage/asyncache.service';
import { LocationService } from 'src/app/core/api/location.service';
import { HouseholdsService } from 'src/app/core/api/households.service';
import { ProjectService } from 'src/app/core/api/project.service';
import { CriteriaService } from 'src/app/core/api/criteria.service';
import { AsyncacheMockService } from 'src/app/core/api/mock/asyncache-mock.service';
import { LocationMockService } from 'src/app/core/api/mock/location-mock.service';
import { HouseholdsMockService } from 'src/app/core/api/mock/households-mock.service';
import { ProjectMockService } from 'src/app/core/api/mock/project-mock.service';
import { CriteriaMockService } from 'src/app/core/api/mock/criteria-mock.service';
import { setAppInjector } from 'src/app/app-injector';

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
