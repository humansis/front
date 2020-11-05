import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsListComponent } from 'src/app/modules/vendors/containers/vendors-list/vendors-list.component';
import { SmartcardSummaryModalComponent } from 'src/app/modules/vendors/containers/modal/smartcard-summary-modal/smartcard-summary-modal.component';

const routes: Routes = [
  {
    path: '',
    component: VendorsListComponent,
  },
  {
    path: ':id/summary',
    component: SmartcardSummaryModalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsRoutingModule {}
