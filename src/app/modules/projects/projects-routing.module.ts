import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { PermissionsGuard } from '../../core/guards/permissions.guard';
import { DeactivateGuard } from '../../core/guards/deactivate.guard';
import { DistributionsComponent } from './distributions/distributions.component';
import { AssistanceCreatePageComponent } from './containers/assistance-create-page/assistance-create-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    canActivate: [AuthGuard, PermissionsGuard],
  },
  {
    path: ':id/assistance/create',
    component: AssistanceCreatePageComponent,
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
