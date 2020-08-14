import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTableComponent } from './history-table.component';
import { HttpClientModule } from '@angular/common/http';
import { setAppInjector } from '../../app-injector';
import { Injector } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { HouseholdsService } from '../../core/api/households.service';
import { HouseholdsMockService } from '../../core/api/mock/households-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HistoryTableComponent', () => {
  let component: HistoryTableComponent;
  let fixture: ComponentFixture<HistoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryTableComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule, RouterTestingModule],
      providers: [
        {
          providers: HouseholdsService,
          useClass: HouseholdsMockService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(HistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
