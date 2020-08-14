import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalLanguageComponent } from './modal-language.component';
import { AsyncacheService } from '../../../core/storage/asyncache.service';
import { AsyncacheMockService } from '../../../core/api/mock/asyncache-mock.service';
import { UserService } from '../../../core/api/user.service';
import { UserMockService } from '../../../core/api/mock/user-mock.service';

describe('ModalLanguageComponent', () => {
  let component: ModalLanguageComponent;
  let fixture: ComponentFixture<ModalLanguageComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLanguageComponent, UppercaseFirstPipe],
      imports: [HttpClientTestingModule, MatSnackBarModule, MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef,
        },
        {
          provide: AsyncacheService,
          useClass: AsyncacheMockService,
        },
        {
          provide: UserService,
          useClass: UserMockService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ModalLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
