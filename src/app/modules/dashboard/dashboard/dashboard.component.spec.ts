import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';
import { GeneralService } from '../../../core/api/general.service';
import { GeneralMockService } from '../../../core/api/mock/general-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DistributionService } from '../../../core/api/distribution.service';
import { DistributionMockService } from '../../../core/api/mock/distribution-mock.service';
import { UserService } from '../../../core/api/user.service';
import { UserMockService } from '../../../core/api/mock/user-mock.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, UppercaseFirstPipe],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
      ],
      providers: [
        { provide: GeneralService, useClass: GeneralMockService },
        { provide: DistributionService, useClass: DistributionMockService },
        { provide: UserService, useClass: UserMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
