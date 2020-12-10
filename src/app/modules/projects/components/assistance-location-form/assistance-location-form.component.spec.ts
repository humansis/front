import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceLocationFormComponent } from './assistance-location-form.component';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { AdministrativeAreaInputComponent } from 'src/app/components/administrative-area/administrative-area-input.component';
import { forwardRef } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgSelectModule } from '@ng-select/ng-select';

describe('AssistanceLocationFormComponent', () => {
  let component: AssistanceLocationFormComponent;
  let fixture: ComponentFixture<AssistanceLocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        NgSelectModule,
      ],
      declarations: [AssistanceLocationFormComponent, AdministrativeAreaInputComponent],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => AdministrativeAreaInputComponent),
          multi: true,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
