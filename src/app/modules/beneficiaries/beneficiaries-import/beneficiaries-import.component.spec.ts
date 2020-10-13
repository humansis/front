import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariesImportComponent } from './beneficiaries-import.component';

import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HouseholdsService } from '../../../core/api/households.service';
import { HouseholdsMockService } from '../../../core/api/mock/households-mock.service';
import { BeneficiariesService } from '../../../core/api/beneficiaries.service';
import { BeneficiariesMockService } from '../../../core/api/mock/beneficiaries-mock.service';
import { ProjectService } from '../../../core/api/project.service';
import { ProjectMockService } from '../../../core/api/mock/project-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BeneficiariesImportComponent', () => {
  let component: BeneficiariesImportComponent;
  let fixture: ComponentFixture<BeneficiariesImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiariesImportComponent],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: HouseholdsService, useClass: HouseholdsMockService },
        { provide: BeneficiariesService, useClass: BeneficiariesMockService },
        { provide: ProjectService, useClass: ProjectMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(BeneficiariesImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
