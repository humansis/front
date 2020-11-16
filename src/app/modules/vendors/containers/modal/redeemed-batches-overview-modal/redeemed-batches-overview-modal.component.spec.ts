import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemedBatchesOverviewModalComponent } from './redeemed-batches-overview-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SmartcardService } from '../../../../../core/api/smartcard.service';
import { SmartcardMockService } from '../../../../../core/api/mock/smartcard-mock.service';
import { FormService } from '../../../../../core/utils/form.service';
import { CurrencyPipe } from '@angular/common';

describe('RedeemedBatchesOverviewModalComponent', () => {
  let component: RedeemedBatchesOverviewModalComponent;
  let fixture: ComponentFixture<RedeemedBatchesOverviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [RedeemedBatchesOverviewModalComponent],
      providers: [
        CurrencyPipe,
        { provide: MatDialogRef, useValue: {} },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            id: '1',
          },
        },
        {
          provide: SmartcardService,
          useClass: SmartcardMockService,
        },
        {
          provide: FormService,
          useValue: {
            getLocalCurrency: () => 'USD',
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemedBatchesOverviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
