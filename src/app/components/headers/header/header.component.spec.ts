import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { AuthenticationMockService } from '../../../core/api/mock/authentication-mock.service';
import { AsyncacheService } from '../../../core/storage/asyncache.service';
import { AsyncacheMockService } from '../../../core/api/mock/asyncache-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        MatMenuModule,
      ],
      providers: [
        {
          provide: AuthenticationService,
          useClass: AuthenticationMockService,
        },
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
