import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddComponent } from './modal-add.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Household } from '../../../models/household';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';
import { Distribution } from '../../../models/distribution';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModalAddComponent', () => {
  let component: ModalAddComponent;
  let fixture: ComponentFixture<ModalAddComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule, MatSnackBarModule],
      declarations: [ModalAddComponent, UppercaseFirstPipe],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ModalAddComponent);
    component = fixture.componentInstance;
    component.data = { objectInstance: new Household() };
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
