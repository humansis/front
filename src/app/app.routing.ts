import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component';
// Services
import { AuthGuard } from './core/guards/auth.guard';
import { DeactivateGuard } from './core/guards/deactivate.guard';
import { PermissionsGuard } from './core/guards/permissions.guard';
// Components

// Do not change the order of the routes, it matters
export const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/projects/projects.module').then((m) => m.ProjectsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'beneficiaries',
    loadChildren: () =>
      import('./modules/beneficiaries/beneficiaries.module').then(
        (m) => m.BeneficiariesModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./modules/reports/reports.module').then((m) => m.ReportsModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/general-settings/general-settings.module').then(
        (m) => m.GeneralSettingsModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'vouchers',
    loadChildren: () =>
      import('./modules/vouchers/vouchers.module').then((m) => m.VouchersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'logs',
    loadChildren: () => import('./modules/logs/logs.module').then((m) => m.LogsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  providers: [DeactivateGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
