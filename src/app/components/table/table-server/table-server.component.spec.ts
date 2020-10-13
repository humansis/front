import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableServerComponent } from './table-server.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { HouseholdsDataSource } from '../../../models/data-sources/households-data-source';
import { HouseholdsService } from '../../../core/api/households.service';
import { Household } from '../../../models/household';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableServerComponent', () => {
  let component: TableServerComponent;
  let fixture: ComponentFixture<TableServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableServerComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(TableServerComponent);
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
