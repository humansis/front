import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariesComponent } from './beneficiaries.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { HouseholdsService } from '../../../core/api/households.service';
import { HouseholdsMockService } from '../../../core/api/mock/households-mock.service';
import { LocationService } from '../../../core/api/location.service';
import { LocationMockService } from '../../../core/api/mock/location-mock.service';
import { ProjectService } from '../../../core/api/project.service';
import { ProjectMockService } from '../../../core/api/mock/project-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HouseholdsComponent', () => {
  let component: BeneficiariesComponent;
  let fixture: ComponentFixture<BeneficiariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiariesComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatDialogModule,
      ],
      providers: [
        { provide: HouseholdsService, useClass: HouseholdsMockService },
        { provide: LocationService, useClass: LocationMockService },
        { provide: ProjectService, useClass: ProjectMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(BeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
