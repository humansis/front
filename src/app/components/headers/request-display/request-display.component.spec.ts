import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDisplayComponent } from './request-display.component';
import { setAppInjector } from '../../../app-injector';
import { Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { AuthenticationMockService } from '../../../core/api/mock/authentication-mock.service';
import { AsyncacheService } from '../../../core/storage/asyncache.service';
import { AsyncacheMockService } from '../../../core/api/mock/asyncache-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RequestDisplayComponent', () => {
  let component: RequestDisplayComponent;
  let fixture: ComponentFixture<RequestDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequestDisplayComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule, MatDialogModule],
      providers: [
        {
          provide: AsyncacheService,
          useClass: AsyncacheMockService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(RequestDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
