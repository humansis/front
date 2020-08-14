import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMobileComponent } from './table-mobile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { Household } from '../../../models/household';
import { HouseholdsDataSource } from '../../../models/data-sources/households-data-source';
import { HouseholdsService } from '../../../core/api/households.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableMobileComponent', () => {
  let component: TableMobileComponent;
  let fixture: ComponentFixture<TableMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableMobileComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        MatSnackBarModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(TableMobileComponent);
    component = fixture.componentInstance;
    component.entity = Household;
    component.data = new HouseholdsDataSource(TestBed.inject(HouseholdsService));
    component.service = TestBed.inject(HouseholdsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
