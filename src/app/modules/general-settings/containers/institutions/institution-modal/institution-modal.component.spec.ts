import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionModalComponent } from './institution-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InstitutionFormComponent } from '../../../components/institution-form/institution-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdministrativeAreaInputComponent } from '../../../../../components/administrative-area/administrative-area-input.component';
import { InstitutionService } from '../../../../../core/api/institution.service';
import { InstitutionMockService } from '../../../../../core/api/mock/institution-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InstitutionModalComponent', () => {
  let component: InstitutionModalComponent;
  let fixture: ComponentFixture<InstitutionModalComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InstitutionModalComponent,
        InstitutionFormComponent,
        AdministrativeAreaInputComponent,
      ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        NgSelectModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: InstitutionService, useValue: InstitutionMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(InstitutionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
