import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/core/api/transaction.service';
import { TableHeader } from 'src/app/models/interfaces/table-header';
import { ClientDataSource } from 'src/app/core/datasource/client-data-source';
import { Purchase } from 'src/app/models/api/purchase';
import { PurchaseRow } from 'src/app/models/table/purchase-row';
import { FormService } from 'src/app/core/utils/form.service';

@Component({
  selector: 'app-household-transactions',
  templateUrl: './household-transactions.component.html',
  styleUrls: ['./household-transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdTransactionsComponent implements OnInit {
  @Input()
  set householdId(householdId: number) {
    this.loadTransactions(householdId);
  }

  private currency: string;

  public readonly TABLE_HEADERS: TableHeader[] = [
    { key: 'usedAt', languageKey: 'date' },
    { key: 'productName', languageKey: 'commodity' },
    { key: 'amount', languageKey: 'amount' },
    { key: 'value', languageKey: 'price' },
    { key: 'source', languageKey: 'purchased_by' },
    { key: 'beneficiary', languageKey: 'beneficiary' },
  ];

  usedAt: string;
  productId: number;
  productName: string;
  value: string;
  quantity: string;
  source: string;

  dataSource: ClientDataSource<PurchaseRow> = new ClientDataSource<PurchaseRow>();

  constructor(
    private transactionService: TransactionService,
    private formService: FormService
  ) {
    this.currency = this.formService.getLocalCurrency();
  }

  ngOnInit(): void {}

  loadTransactions(householdId: number) {
    this.transactionService.getHouseholdPurchases(householdId).subscribe(
      (purchases: Purchase[]) => {
        this.dataSource.loading = false;
        this.dataSource.data = purchases.map((item) => {
          return {
            ...item,
            value: `${item.value} ${this.currency}`,
            amount: `${item.quantity} ${item.unit}`,
            beneficiary: item.beneficiary.name,
          };
        });
      },
      (error) => {
        this.dataSource.loading = false;
      }
    );
  }
}
