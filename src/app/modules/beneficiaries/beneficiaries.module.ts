import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiariesRoutingModule } from './beneficiaries-routing.module';
import { MdePopoverModule } from '@material-extended/mde';

@NgModule({
  declarations: [],
  imports: [CommonModule, BeneficiariesRoutingModule, MdePopoverModule],
})
export class BeneficiariesModule {}
