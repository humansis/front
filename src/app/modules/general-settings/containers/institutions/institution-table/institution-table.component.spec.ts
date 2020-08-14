import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionTableComponent } from './institution-table.component';
import { HttpClientModule } from '@angular/common/http';
import { setAppInjector } from '../../../../../app-injector';
import { Injector } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { InstitutionService } from '../../../../../core/api/institution.service';
import { InstitutionMockService } from '../../../../../core/api/mock/institution-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InstitutionTableComponent', () => {
  let component: InstitutionTableComponent;
  let fixture: ComponentFixture<InstitutionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionTableComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule, MatDialogModule],
      providers: [{ provide: InstitutionService, useClass: InstitutionMockService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(InstitutionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
