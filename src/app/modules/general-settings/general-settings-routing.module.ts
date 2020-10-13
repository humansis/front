import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicSettingsComponent } from 'src/app/modules/general-settings/containers/dynamic-settings/dynamic-settings.component';
import { GeneralSettingsComponent } from 'src/app/modules/general-settings/containers/general-settings/general-settings.component';
import { InstitutionsComponent } from 'src/app/modules/general-settings/containers/institutions/institutions.component';
import { CommunitiesComponent } from 'src/app/modules/general-settings/containers/communities/communities.component';
import { PermissionsGuard } from 'src/app/core/guards/permissions.guard';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: GeneralSettingsComponent,
    canActivate: [AuthGuard, PermissionsGuard],
    children: [
      {
        path: '',
        redirectTo: 'projects',
      },
      {
        path: 'institutions',
        component: InstitutionsComponent,
        data: {
          title: 'institutions',
        },
      },
      {
        path: 'communities',
        component: CommunitiesComponent,
        data: {
          title: 'communities',
        },
      },
      {
        path: ':title',
        component: DynamicSettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralSettingsRoutingModule {}
