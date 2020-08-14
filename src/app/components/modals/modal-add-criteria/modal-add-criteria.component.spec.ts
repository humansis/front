import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCriteriaComponent } from './modal-add-criteria.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';
import { CriteriaService } from '../../../core/api/criteria.service';
import { CriteriaMockService } from '../../../core/api/mock/criteria-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModalAddCriteriaComponent', () => {
  let component: ModalAddCriteriaComponent;
  let fixture: ComponentFixture<ModalAddCriteriaComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddCriteriaComponent, UppercaseFirstPipe],
      imports: [HttpClientTestingModule, MatSnackBarModule, MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: CriteriaService, useClass: CriteriaMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ModalAddCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
