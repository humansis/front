import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobileComponent } from './header-mobile.component';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { BeneficiariesComponent } from '../../../modules/beneficiaries/beneficiaries/beneficiaries.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjectService } from '../../../core/api/project.service';
import { ProjectMockService } from '../../../core/api/mock/project-mock.service';

describe('HeaderMobileComponent', () => {
  let component: HeaderMobileComponent;
  let fixture: ComponentFixture<HeaderMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMobileComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'beneficiaries/import', component: BeneficiariesComponent },
        ]),
        MatDialogModule,
        MatSnackBarModule,
        MatMenuModule,
      ],
      providers: [{ provide: ProjectService, useClass: ProjectMockService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(HeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
