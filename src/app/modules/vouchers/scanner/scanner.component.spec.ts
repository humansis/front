import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerComponent } from './scanner.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { ZXingScannerComponent, ZXingScannerModule } from '@zxing/ngx-scanner';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ScannerComponent', () => {
  let component: ScannerComponent;
  let fixture: ComponentFixture<ScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerComponent],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        MatDialogModule,
        RouterTestingModule,
        ZXingScannerModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ScannerComponent);
    component = fixture.componentInstance;
    component.currentDevice = null;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
