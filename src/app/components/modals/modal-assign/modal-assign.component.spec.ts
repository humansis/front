import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAssignComponent } from './modal-assign.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';
import { BookletService } from '../../../core/api/booklet.service';
import { BookletMockService } from '../../../core/api/mock/booklet-mock.service';
import { DistributionMockService } from '../../../core/api/mock/distribution-mock.service';
import { DistributionService } from '../../../core/api/distribution.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModalAssignComponent', () => {
  let component: ModalAssignComponent;
  let fixture: ComponentFixture<ModalAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
      ],
      declarations: [ModalAssignComponent, UppercaseFirstPipe],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: BookletService, useClass: BookletMockService },
        { provide: DistributionService, useClass: DistributionMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ModalAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
