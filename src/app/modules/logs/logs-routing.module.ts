import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogsComponent} from './logs.component';
import {AuthGuard} from '../../core/guards/auth.guard';
import {PermissionsGuard} from '../../core/guards/permissions.guard';


const routes: Routes = [
    {
        path: 'logs',
        component: LogsComponent,
        canActivate: [AuthGuard, PermissionsGuard]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }
