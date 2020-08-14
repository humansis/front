import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDeleteBeneficiaryComponent } from './modal-delete-beneficiary.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';

describe('ModalDeleteBeneficiaryComponent', () => {
  let component: ModalDeleteBeneficiaryComponent;
  let fixture: ComponentFixture<ModalDeleteBeneficiaryComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeleteBeneficiaryComponent, UppercaseFirstPipe],
      imports: [HttpClientTestingModule, MatSnackBarModule, MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ModalDeleteBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
