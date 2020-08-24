import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule } from '@angular/material/dialog';
import { Injector } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { TableMobileServerComponent } from './table-mobile-server.component';
import { setAppInjector } from '../../../app-injector';
import { Household } from '../../../models/household';
import { HouseholdsDataSource } from '../../../models/data-sources/households-data-source';
import { HouseholdsService } from '../../../core/api/households.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableMobileServerComponent', () => {
  let component: TableMobileServerComponent;
  let fixture: ComponentFixture<TableMobileServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableMobileServerComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatDialogModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(TableMobileServerComponent);
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
