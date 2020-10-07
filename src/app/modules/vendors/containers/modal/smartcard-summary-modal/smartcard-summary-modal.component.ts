import { Component, Inject, OnInit } from '@angular/core';
import { combineLatest, merge, Observable } from 'rxjs';
import { RedeemedBatch } from 'src/app/models/api/redeemed-batch';
import { CountValue } from 'src/app/models/api/count-value';
import { PurchasesToRedeem } from 'src/app/models/api/purchases-to-redeem';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { endWith, map, share, shareReplay, startWith, tap } from 'rxjs/operators';
import { SmartcardService } from 'src/app/core/api/smartcard.service';

@Component({
  selector: 'app-smartcard-summary-modal',
  templateUrl: './smartcard-summary-modal.component.html',
  styleUrls: ['./smartcard-summary-modal.component.scss'],
})
export class SmartcardSummaryModalComponent implements OnInit {
  purchasesStats$: Observable<CountValue>;
  purchasesRedeemStats$: Observable<PurchasesToRedeem>;
  redeemedBatches$: Observable<RedeemedBatch[]>;
  loading$: Observable<any>;

  private readonly id: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: string;
    },
    private smartcardService: SmartcardService
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
    this.redeemedBatches$ = this.smartcardService
      .getVendorRedeemedBatches(this.id)
      .pipe(shareReplay());
    this.loading$ = merge(
      this.purchasesStats$,
      this.purchasesRedeemStats$,
      this.redeemedBatches$
    ).pipe(startWith(true), endWith(false));
  }

  onRedeem(batch: number[]) {
    this.smartcardService.redeemBatch(this.id, batch).subscribe(() => {
      this.load();
    });
  }
}
