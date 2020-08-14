import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmFormComponent } from './adm-form.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Location } from '../../models/location';
import { HintErrorComponent } from '../hint-error/hint-error.component';
import { LocationService } from '../../core/api/location.service';
import { LocationMockService } from '../../core/api/mock/location-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('AdmFormComponent', () => {
  let component: AdmFormComponent;
  let fixture: ComponentFixture<AdmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule, ReactiveFormsModule],
      declarations: [AdmFormComponent, HintErrorComponent],
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
    fixture = TestBed.createComponent(AdmFormComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({});
    component.location = new Location();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
