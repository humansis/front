import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { PermissionsGuard } from '../../core/guards/permissions.guard';
import { AddDistributionComponent } from './add-distribution/add-distribution.component';
import { DeactivateGuard } from '../../core/guards/deactivate.guard';
import { DistributionsComponent } from './distributions/distributions.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    canActivate: [AuthGuard, PermissionsGuard],
  },
  {
    path: 'add-distribution',
    component: AddDistributionComponent,
    canDeactivate: [DeactivateGuard],
    canActivate: [AuthGuard, PermissionsGuard],
  },
  {
    path: 'distributions/:id',
    component: DistributionsComponent,
    canDeactivate: [DeactivateGuard],
    canActivate: [AuthGuard, PermissionsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
