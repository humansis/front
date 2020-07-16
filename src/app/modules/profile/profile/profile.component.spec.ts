import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { AuthenticationMockService } from '../../../core/api/mock/authentication-mock.service';
import { UserService } from '../../../core/api/user.service';
import { UserMockService } from '../../../core/api/mock/user-mock.service';
import { AsyncacheService } from '../../../core/storage/asyncache.service';
import { AsyncacheMockService } from '../../../core/api/mock/asyncache-mock.service';
import { OrganizationServicesService } from '../../../core/api/organization-services.service';
import { OrganizationMockService } from '../../../core/api/mock/organization-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        ReactiveFormsModule,
        NgSelectModule,
      ],
      providers: [
        {
          provide: AuthenticationService,
          useClass: AuthenticationMockService,
        },
        {
          provide: UserService,
          useClass: UserMockService,
        },
        {
          provide: AsyncacheService,
          useClass: AsyncacheMockService,
        },
        {
          provide: OrganizationServicesService,
          useClass: OrganizationMockService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
