import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SmartcardService } from '../../../../../core/api/smartcard.service';
import { forkJoin } from 'rxjs';
import { PurchaseInfo } from '../../../../../models/api/purchase-info';
import { ClientDataSource } from '../../../../../core/datasource/client-data-source';
import { RedeemedBatch } from '../../../../../models/api/redeemed-batch';
import { TableHeader } from '../../../../../models/interfaces/table-header';
import { CurrencyPipe } from '@angular/common';
import { FormService } from '../../../../../core/utils/form.service';
import { Language } from '../../../../../core/language/language';
import { LanguageService } from '../../../../../core/language/language.service';
import { VendorsService } from '../../../../../core/api/vendors.service';
import { Vendor } from '../../../../../models/api/vendor';
import * as FileSaver from 'file-saver';
import { ComponentType } from '@angular/cdk/portal';
import { SmartcardSummaryModalComponent } from 'src/app/modules/vendors/containers/modal/smartcard-summary-modal/smartcard-summary-modal.component';

@Component({
  selector: 'app-redemption-summary-modal',
  templateUrl: './redemption-summary-modal.component.html',
  styleUrls: ['./redemption-summary-modal.component.scss'],
})
export class RedemptionSummaryModalComponent implements OnInit {
  dataSource: ClientDataSource<PurchaseInfo> = new ClientDataSource<PurchaseInfo>();
  language: Language = this.languageService.selectedLanguage;
  loading = false;
  downloadingExport = false;

  public readonly TABLE_HEADERS: TableHeader[] = [
    { key: 'purchase_date', languageKey: 'date' },
    { key: 'beneficiary_local_name', languageKey: 'beneficiary_local_name' },
    {
      key: 'purchase_amount',
      languageKey: 'amount',
      showTotal: true,
      transform: (value) => this.currencyPipe.transform(value, this.currency),
    },
  ];

  private readonly currency = 'USD';
  private readonly batchId: string;
  private readonly vendorId: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      batchId: string;
      vendorId: string;
      backComponent: ComponentType<any>;
    },
    private smartcardService: SmartcardService,
    private currencyPipe: CurrencyPipe,
    private formService: FormService,
    private languageService: LanguageService,
    private vendorsService: VendorsService,
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<RedemptionSummaryModalComponent>
  ) {
    this.batchId = data.batchId;
    this.vendorId = data.vendorId;
  }

  ngOnInit(): void {
    this.loading = true;
    this.smartcardService.getVendorBatchPurchases(this.batchId).subscribe(
      (batch) => {
        this.dataSource = new ClientDataSource<PurchaseInfo>(batch);
        this.loading = false;
      },
      () => (this.loading = false)
    );
  }

  back() {
    this.matDialog.open(this.data.backComponent, {
      width: '650px',
      data: {
        id: this.vendorId,
      },
    });
  }

  print() {
    this.downloadingExport = true;
    forkJoin({
      vendor: this.vendorsService.getOne(+this.vendorId),
      batch: this.smartcardService.getVendorBatch(this.batchId),
      export: this.smartcardService.getVendorBatchExport(this.batchId),
    }).subscribe(
      (data: { vendor: Vendor; batch: RedeemedBatch; export: any }) => {
        FileSaver.saveAs(
          data.export,
          `SmatcardInvoice_${data.vendor.name}_${data.batch.date}.xlsx`
        );
        this.downloadingExport = false;
        this.dialogRef.close();
      },
      (_) => (this.downloadingExport = false)
    );
  }
}
