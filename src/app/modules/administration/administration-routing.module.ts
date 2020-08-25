import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './admnistration/administration.component';
import { PermissionsGuard } from 'src/app/core/guards/permissions.guard';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    canActivate: [AuthGuard, PermissionsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
