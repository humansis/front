import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalDeleteComponent } from './modal-delete.component';

describe('ModalDeleteComponent', () => {
  let component: ModalDeleteComponent;
  let fixture: ComponentFixture<ModalDeleteComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeleteComponent, UppercaseFirstPipe],
      imports: [HttpClientTestingModule, MatSnackBarModule, MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
