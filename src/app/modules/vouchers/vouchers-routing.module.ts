import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VouchersComponent} from './vouchers/vouchers.component';
import {AuthGuard} from '../../core/guards/auth.guard';
import {PermissionsGuard} from '../../core/guards/permissions.guard';


const routes: Routes = [
    {
        path: '',
        component: VouchersComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VouchersRoutingModule { }
