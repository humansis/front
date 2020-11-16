import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsListComponent } from './containers/vendors-list/vendors-list.component';
import { VendorTableComponent } from './containers/vendor-table/vendor-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SmartcardSummaryComponent } from './components/smartcard-summary/smartcard-summary.component';
import { SmartcardSummaryModalComponent } from './containers/modal/smartcard-summary-modal/smartcard-summary-modal.component';
import { RedeemedBatchesOverviewModalComponent } from './containers/modal/redeemed-batches-overview-modal/redeemed-batches-overview-modal.component';
import { RedemptionSummaryModalComponent } from './containers/modal/redemption-summary-modal/redemption-summary-modal.component';

@NgModule({
  declarations: [
    VendorsListComponent,
    VendorTableComponent,
    SmartcardSummaryComponent,
    SmartcardSummaryModalComponent,
    RedeemedBatchesOverviewModalComponent,
    RedemptionSummaryModalComponent,
  ],
  imports: [CommonModule, SharedModule, VendorsRoutingModule],
  providers: [CurrencyPipe],
})
export class VendorsModule {}
