import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportedDataComponent } from './imported-data.component';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { HouseholdsService } from '../../../../core/api/households.service';
import { HouseholdsMockService } from '../../../../core/api/mock/households-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ImportedDataComponent', () => {
  let component: ImportedDataComponent;
  let fixture: ComponentFixture<ImportedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImportedDataComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatSnackBarModule],
      providers: [{ provide: HouseholdsService, useClass: HouseholdsMockService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ImportedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
