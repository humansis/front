import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesComponent } from './communities.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../../../../core/api/user.service';
import { UserMockService } from '../../../../core/api/mock/user-mock.service';
import { InstitutionService } from '../../../../core/api/institution.service';
import { InstitutionMockService } from '../../../../core/api/mock/institution-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommunitiesComponent', () => {
  let component: CommunitiesComponent;
  let fixture: ComponentFixture<CommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitiesComponent],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
      ],
      providers: [
        { provide: UserService, useClass: UserMockService },
        { provide: InstitutionService, useClass: InstitutionMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(CommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
