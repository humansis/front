import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExportButtonComponent } from './export-button.component';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../app-injector';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ExportService } from '../../core/api/export.service';
import { ExportMockService } from '../../core/api/mock/export-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExportButtonComponent', () => {
  let component: ExportButtonComponent;
  let fixture: ComponentFixture<ExportButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExportButtonComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [
        {
          provide: ExportService,
          useClass: ExportMockService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ExportButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
