import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedemptionSummaryModalComponent } from './redemption-summary-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SmartcardService } from '../../../../../core/api/smartcard.service';
import { SmartcardMockService } from '../../../../../core/api/mock/smartcard-mock.service';
import { FormService } from '../../../../../core/utils/form.service';
import { CurrencyPipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('RedemptionSummaryModalComponent', () => {
  let component: RedemptionSummaryModalComponent;
  let fixture: ComponentFixture<RedemptionSummaryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
      ],
      declarations: [RedemptionSummaryModalComponent],
      providers: [
        CurrencyPipe,
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            id: '1',
          },
        },
        { provide: MatDialogRef, useValue: {} },
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
    fixture = TestBed.createComponent(RedemptionSummaryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
