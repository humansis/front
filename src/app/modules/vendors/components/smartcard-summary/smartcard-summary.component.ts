import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RedeemedBatch } from 'src/app/models/api/redeemed-batch';
import { ClientDataSource } from 'src/app/core/datasource/client-data-source';
import { TableHeader } from 'src/app/models/interfaces/table-header';

@Component({
  selector: 'app-smartcard-summary',
  templateUrl: './smartcard-summary.component.html',
  styleUrls: ['./smartcard-summary.component.scss'],
})
export class SmartcardSummaryComponent implements OnInit {
  @Input()
  totalPurchases: number;
  @Input()
  sumOfPurchases: number;
  @Input()
  purchasesToRedeem: number[] = [];
  @Input()
  sumToRedeem: number;
  @Input()
  set redeemedBatches(redeemedBatches: RedeemedBatch[]) {
    if (redeemedBatches) {
      this.dataSource.data = redeemedBatches;
    }
  }
  @Output()
  redeem: EventEmitter<number[]> = new EventEmitter<number[]>();

  dataSource: ClientDataSource<RedeemedBatch> = new ClientDataSource<RedeemedBatch>();

  public readonly TABLE_HEADERS: TableHeader[] = [
    { key: 'date', languageKey: 'date' },
    { key: 'count', languageKey: 'quantity' },
    { key: 'value', languageKey: 'total' },
  ];

  constructor() {}

  ngOnInit(): void {}

  redeemClick() {
    if (this.purchasesToRedeem.length > 0) {
      this.redeem.emit(this.purchasesToRedeem);
    }
  }
}
