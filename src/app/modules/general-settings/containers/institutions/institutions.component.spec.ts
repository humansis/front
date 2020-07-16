import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionsComponent } from './institutions.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { InstitutionService } from '../../../../core/api/institution.service';
import { InstitutionMockService } from '../../../../core/api/mock/institution-mock.service';
import { UserService } from '../../../../core/api/user.service';
import { UserMockService } from '../../../../core/api/mock/user-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InstitutionsComponent', () => {
  let component: InstitutionsComponent;
  let fixture: ComponentFixture<InstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionsComponent],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
      ],
      providers: [
        { provide: InstitutionService, useClass: InstitutionMockService },
        { provide: UserService, useClass: UserMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(InstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
