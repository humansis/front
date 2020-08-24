import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityModalComponent } from './community-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommunityFormComponent } from '../../../components/community-form/community-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdministrativeAreaInputComponent } from '../../../../../components/administrative-area/administrative-area-input.component';
import { CommunityService } from '../../../../../core/api/community.service';
import { CommunityMockService } from '../../../../../core/api/mock/community-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommunityModalComponent', () => {
  let component: CommunityModalComponent;
  let fixture: ComponentFixture<CommunityModalComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommunityModalComponent,
        CommunityFormComponent,
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
        { provide: CommunityService, useClass: CommunityMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(CommunityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
