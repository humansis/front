import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeAreaInputComponent } from './administrative-area-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../app-injector';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgSelectModule } from '@ng-select/ng-select';
import { LocationService } from '../../core/api/location.service';
import { LocationMockService } from '../../core/api/mock/location-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdministrativeAreaInputComponent', () => {
  let component: AdministrativeAreaInputComponent;
  let fixture: ComponentFixture<AdministrativeAreaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrativeAreaInputComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        NgSelectModule,
      ],
      providers: [
        {
          provide: LocationService,
          useClass: LocationMockService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(AdministrativeAreaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
