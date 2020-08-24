import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMappingComponent } from './data-mapping.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeneficiariesComponent } from '../beneficiaries/beneficiaries.component';

describe('HouseholdsDataMappingComponent', () => {
  let component: DataMappingComponent;
  let fixture: ComponentFixture<DataMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataMappingComponent],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        MatDialogModule,
        RouterTestingModule.withRoutes([
          { path: 'beneficiaries/import', component: BeneficiariesComponent },
        ]),
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(DataMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
