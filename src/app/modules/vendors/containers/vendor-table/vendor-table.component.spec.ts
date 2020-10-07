import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTableComponent } from './vendor-table.component';
import { VendorsService } from 'src/app/core/api/vendors.service';
import { VendorsMockService } from 'src/app/core/api/mock/vendors-mock.service';
import { MatDialogModule } from '@angular/material/dialog';

describe('VendorTableComponent', () => {
  let component: VendorTableComponent;
  let fixture: ComponentFixture<VendorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [{ provide: VendorsService, useClass: VendorsMockService }],
      declarations: [VendorTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
