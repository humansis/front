import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalConfirmationComponent } from './modal-confirmation.component';

describe('ModalConfirmationComponent', () => {
  let component: ModalConfirmationComponent;
  let fixture: ComponentFixture<ModalConfirmationComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmationComponent, UppercaseFirstPipe],
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
    fixture = TestBed.createComponent(ModalConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
