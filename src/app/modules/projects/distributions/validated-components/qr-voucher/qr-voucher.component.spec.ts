import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QrVoucherComponent } from './qr-voucher.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../../app-injector';
import { Distribution } from '../../../../../models/distribution';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { UppercaseFirstPipe } from '../../../../../shared/pipes/uppercase-first.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QrVoucherComponent', () => {
  let component: QrVoucherComponent;
  let fixture: ComponentFixture<QrVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatDialogModule,
      ],
      declarations: [QrVoucherComponent, UppercaseFirstPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(QrVoucherComponent);
    component = fixture.componentInstance;
    component.actualDistribution = new Distribution();
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
