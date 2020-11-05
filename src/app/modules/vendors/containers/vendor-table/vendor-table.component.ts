import { Component, OnInit } from '@angular/core';
import { TableHeader } from 'src/app/models/interfaces/table-header';
import { ClientDataSource } from 'src/app/core/datasource/client-data-source';
import { VendorsService } from 'src/app/core/api/vendors.service';
import { VendorRow } from 'src/app/models/table/vendor-row';
import { Vendor } from 'src/app/models/api/vendor';
import { MatDialog } from '@angular/material/dialog';
import { SmartcardSummaryModalComponent } from 'src/app/modules/vendors/containers/modal/smartcard-summary-modal/smartcard-summary-modal.component';

@Component({
  selector: 'app-vendor-table',
  templateUrl: './vendor-table.component.html',
  styleUrls: ['./vendor-table.component.scss'],
})
export class VendorTableComponent implements OnInit {
  public readonly TABLE_HEADERS: TableHeader[] = [
    { key: 'user', languageKey: 'username' },
    { key: 'name', languageKey: 'name' },
    { key: 'address_number', languageKey: 'address_number' },
    { key: 'address_postcode', languageKey: 'address_postcode' },
    { key: 'address_street', languageKey: 'address_street' },
    { key: 'location', languageKey: 'location' },
  ];

  dataSource: ClientDataSource<VendorRow> = new ClientDataSource<VendorRow>();

  constructor(private vendorsService: VendorsService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.loadVendors();
  }

  loadVendors() {
    this.vendorsService.get().subscribe(
      (vendors: Vendor[]) => {
        this.dataSource.loading = false;
        const vendorRows: VendorRow[] = vendors.map((item) => {
          return {
            ...item,
            user: item.user.username,
            location:
              item.location?.adm1?.name ||
              item.location?.adm2?.name ||
              item.location?.adm3?.name ||
              item.location?.adm4?.name,
          } as VendorRow;
        });
        this.dataSource.data = vendorRows;
      },
      (error) => {
        this.dataSource.loading = false;
      }
    );
  }

  showRedeemModal(id: string) {
    this.matDialog.open(SmartcardSummaryModalComponent, {
      width: '650px',
      data: {
        id,
      },
    });
  }
}
