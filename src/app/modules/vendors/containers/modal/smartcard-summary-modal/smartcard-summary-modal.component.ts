import { Component, Inject, OnInit } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { CountValue } from 'src/app/models/api/count-value';
import { PurchasesToRedeem } from 'src/app/models/api/purchases-to-redeem';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { endWith, shareReplay, startWith } from 'rxjs/operators';
import { SmartcardService } from 'src/app/core/api/smartcard.service';
import { FormService } from 'src/app/core/utils/form.service';
import { RedeemedBatchesOverviewModalComponent } from '../redeemed-batches-overview-modal/redeemed-batches-overview-modal.component';
import { LanguageService } from '../../../../../core/language/language.service';
import { Language } from '../../../../../core/language/language';
import { RedemptionSummaryModalComponent } from '../redemption-summary-modal/redemption-summary-modal.component';

@Component({
  selector: 'app-smartcard-summary-modal',
  templateUrl: './smartcard-summary-modal.component.html',
  styleUrls: ['./smartcard-summary-modal.component.scss'],
})
export class SmartcardSummaryModalComponent implements OnInit {
  purchasesStats$: Observable<CountValue>;
  purchasesRedeemStats$: Observable<PurchasesToRedeem>;
  loading$: Observable<any>;
  redeeming = false;
  currency = 'USD';
  language: Language = this.languageService.selectedLanguage;

  private readonly id: string;
  private batch: number[];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: string;
    },
    private smartcardService: SmartcardService,
    private formService: FormService,
    private matDialog: MatDialog,
    private languageService: LanguageService,
    private dialogRef: MatDialogRef<SmartcardSummaryModalComponent>
  ) {
    this.id = data.id;
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.purchasesStats$ = this.smartcardService
      .getVendorPurchases(this.id)
      .pipe(shareReplay());
    this.purchasesRedeemStats$ = this.smartcardService
      .getVendorPurchasesToRedeem(this.id)
      .pipe(shareReplay());
    this.loading$ = merge(this.purchasesStats$, this.purchasesRedeemStats$).pipe(
      startWith(true),
      endWith(false)
    );
    this.purchasesRedeemStats$.subscribe((stats) => (this.batch = stats.purchases_ids));
  }

  redeem() {
    this.redeeming = true;
    this.smartcardService.redeemBatch(this.id, this.batch).subscribe(
      (response: { id: number }) => {
        this.redeeming = false;
        this.dialogRef.close();
        this.matDialog.open(RedemptionSummaryModalComponent, {
          width: '650px',
          data: {
            vendorId: this.id,
            batchId: response.id,
          },
        });
      },
      () => (this.redeeming = false)
    );
  }

  canRedeem() {
    return this.batch && this.batch.length > 0;
  }

  onShowHistoryClick() {
    this.dialogRef.close();
    this.matDialog.open(RedeemedBatchesOverviewModalComponent, {
      width: '650px',
      data: {
        id: this.id,
        backComponent: SmartcardSummaryModalComponent,
      },
    });
  }
}
