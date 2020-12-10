import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { BeneficiariesRoutingModule } from './beneficiaries-routing.module';
import { MdePopoverModule } from '@material-extended/mde';
import { SharedModule } from 'src/app/shared/shared.module';
import { HouseholdSummaryHeaderComponent } from './components/household-summary-header/household-summary-header.component';
import { HouseholdLocationComponent } from './components/household-location/household-location.component';
import { HouseholdDetailComponent } from 'src/app/modules/beneficiaries/containers/household-detail/household-detail.component';
import { HouseholdDistributionsComponent } from 'src/app/modules/beneficiaries/containers/household-distributions/household-distributions.component';
import { HouseholdTransactionsComponent } from 'src/app/modules/beneficiaries/containers/household-transactions/household-transactions.component';

@NgModule({
  declarations: [
    HouseholdDetailComponent,
    HouseholdSummaryHeaderComponent,
    HouseholdLocationComponent,
    HouseholdDistributionsComponent,
    HouseholdTransactionsComponent,
  ],
  providers: [CurrencyPipe],
  imports: [CommonModule, BeneficiariesRoutingModule, MdePopoverModule, SharedModule],
})
export class BeneficiariesModule {}
