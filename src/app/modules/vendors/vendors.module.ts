import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsListComponent } from './containers/vendors-list/vendors-list.component';
import { VendorTableComponent } from './containers/vendor-table/vendor-table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VendorsListComponent, VendorTableComponent],
  imports: [CommonModule, SharedModule, VendorsRoutingModule],
})
export class VendorsModule {}
