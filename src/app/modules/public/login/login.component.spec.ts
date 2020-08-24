import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { AuthenticationMockService } from '../../../core/api/mock/authentication-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../../core/api/user.service';
import { UserMockService } from '../../../core/api/mock/user-mock.service';
import { AsyncacheService } from '../../../core/storage/asyncache.service';
import { AsyncacheMockService } from '../../../core/api/mock/asyncache-mock.service';
import { HouseholdsService } from '../../../core/api/households.service';
import { HouseholdsMockService } from '../../../core/api/mock/households-mock.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule, RouterTestingModule],
      providers: [
        { provide: AuthenticationService, useClass: AuthenticationMockService },
        { provide: UserService, useClass: UserMockService },
        { provide: AsyncacheService, useClass: AsyncacheMockService },
        { provide: HouseholdsService, useClass: HouseholdsMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
