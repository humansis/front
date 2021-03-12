import { Component, Inject, OnInit } from '@angular/core';
import { ClientDataSource } from '../../../../../core/datasource/client-data-source';
import { RedeemedBatch } from '../../../../../models/api/redeemed-batch';
import { TableHeader } from '../../../../../models/interfaces/table-header';
import { CurrencyPipe } from '@angular/common';
import { FormService } from '../../../../../core/utils/form.service';
import { SmartcardService } from '../../../../../core/api/smartcard.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LanguageService } from '../../../../../core/language/language.service';
import { Language } from '../../../../../core/language/language';
import { RedemptionSummaryModalComponent } from 'src/app/modules/vendors/containers/modal/redemption-summary-modal/redemption-summary-modal.component';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-redeemed-batches-overview-modal',
  templateUrl: './redeemed-batches-overview-modal.component.html',
  styleUrls: ['./redeemed-batches-overview-modal.component.scss'],
})
export class RedeemedBatchesOverviewModalComponent implements OnInit {
  dataSource: ClientDataSource<RedeemedBatch> = new ClientDataSource<RedeemedBatch>();
  language: Language = this.languageService.selectedLanguage;

  loading = false;
  public readonly TABLE_HEADERS: TableHeader[] = [
    { key: 'date', languageKey: 'date' },
    { key: 'project_name', languageKey: 'project' },
    { key: 'count', languageKey: 'quantity' },
    {
      key: 'value',
      languageKey: 'total',
      transform: (value) => this.currencyPipe.transform(value, this.currency),
    },
  ];

  private readonly currency = 'USD';
  private readonly id: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: string;
      backComponent: ComponentType<any>;
    },
    private currencyPipe: CurrencyPipe,
    private formService: FormService,
    private smartcardService: SmartcardService,
    private languageService: LanguageService,
    private matDialog: MatDialog
  ) {
    this.id = data.id;
  }

  ngOnInit(): void {
    this.loading = true;
    this.smartcardService.getVendorRedeemedBatches(this.id).subscribe(
      (batch) => {
        this.dataSource = new ClientDataSource<RedeemedBatch>(batch);
        this.loading = false;
      },
      () => (this.loading = false)
    );
  }

  back() {
    this.matDialog.open(this.data.backComponent, {
      width: '650px',
      data: {
        id: this.id,
        backComponent: RedeemedBatchesOverviewModalComponent,
      },
    });
  }

  showRedemptionSummary(batchId: string) {
    this.matDialog.open(RedemptionSummaryModalComponent, {
      width: '650px',
      data: {
        vendorId: this.id,
        batchId,
        backComponent: RedeemedBatchesOverviewModalComponent,
      },
    });
  }
}
