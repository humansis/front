import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsComponent } from './logs.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { LogsService } from '../../core/api/logs.service';
import { LogsMockService } from '../../core/api/mock/logs-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LogsComponent', () => {
  let component: LogsComponent;
  let fixture: ComponentFixture<LogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogsComponent],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        MatDialogModule,
        RouterTestingModule,
      ],
      providers: [{ provide: LogsService, useClass: LogsMockService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
