import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcardSummaryModalComponent } from './smartcard-summary-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SmartcardService } from 'src/app/core/api/smartcard.service';
import { SmartcardMockService } from 'src/app/core/api/mock/smartcard-mock.service';
import { FormService } from 'src/app/core/utils/form.service';

describe('SmartcardSummaryModalComponent', () => {
  let component: SmartcardSummaryModalComponent;
  let fixture: ComponentFixture<SmartcardSummaryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [SmartcardSummaryModalComponent],
      providers: [
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartcardSummaryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
