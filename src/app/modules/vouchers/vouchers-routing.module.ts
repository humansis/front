import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VouchersComponent } from './vouchers/vouchers.component';
import { PermissionsGuard } from '../../core/guards/permissions.guard';

const routes: Routes = [
  {
    path: '',
    component: VouchersComponent,
    canActivate: [PermissionsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VouchersRoutingModule {}
