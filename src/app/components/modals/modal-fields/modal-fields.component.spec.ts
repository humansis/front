import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFieldsComponent } from './modal-fields.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Household } from '../../../models/household';
import { UploadService } from '../../../core/api/upload.service';
import { UploadMockService } from '../../../core/api/mock/upload-mock.service';
import { LocationService } from '../../../core/api/location.service';
import { LocationMockService } from '../../../core/api/mock/location-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModalFieldsComponent', () => {
  let component: ModalFieldsComponent;
  let fixture: ComponentFixture<ModalFieldsComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFieldsComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule, MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: UploadService, useClass: UploadMockService },
        { provide: LocationService, useClass: LocationMockService },
        { provide: UploadService, useClass: UploadMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ModalFieldsComponent);
    component = fixture.componentInstance;
    component.data = { objectInstance: new Household() };
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
