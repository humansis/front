import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAddBeneficiaryComponent } from './modal-add-beneficiary.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Distribution } from '../../../models/distribution';
import { Project } from '../../../models/project';
import { BeneficiariesService } from '../../../core/api/beneficiaries.service';
import { BeneficiariesMockService } from '../../../core/api/mock/beneficiaries-mock.service';
import { AsyncacheService } from '../../../core/storage/asyncache.service';
import { AsyncacheMockService } from '../../../core/api/mock/asyncache-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModalAddBeneficiaryComponent', () => {
  let component: ModalAddBeneficiaryComponent;
  let fixture: ComponentFixture<ModalAddBeneficiaryComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule, MatDialogModule],
      declarations: [ModalAddBeneficiaryComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: BeneficiariesService, useClass: BeneficiariesMockService },
        { provide: AsyncacheService, useClass: AsyncacheMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ModalAddBeneficiaryComponent);
    component = fixture.componentInstance;
    const distribution = new Distribution();
    distribution.fields.project.value = new Project();
    component.data = {
      distribution: distribution,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
