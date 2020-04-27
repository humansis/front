import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './components/error-pages/not-found/not-found.component';
// Services
import {AuthGuard} from './core/guards/auth.guard';
import {DeactivateGuard} from './core/guards/deactivate.guard';
import {PermissionsGuard} from './core/guards/permissions.guard';
// Components

// Do not change the order of the routes, it matters
export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard, PermissionsGuard],
    },
    {
        path: 'projects',
        loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule),
        canActivate: [AuthGuard, PermissionsGuard],
    },
    {
        path: 'beneficiaries',
        loadChildren: () => import('./modules/beneficiaries/beneficiaries.module').then(m => m.BeneficiariesModule),
        canActivate: [AuthGuard, PermissionsGuard],
    },
    {
        path: 'reports',
        loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule),
        canActivate: [AuthGuard, PermissionsGuard],
    },
    {
        path: 'settings',
        loadChildren: () => import('./modules/general-settings/general-settings.module').then(m => m.GeneralSettingsModule),
        canActivate: [AuthGuard, PermissionsGuard],
    },
    {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard, PermissionsGuard],
    },
    {
        path: 'vouchers',
        loadChildren: () => import('./modules/vouchers/vouchers.module').then(m => m.VouchersModule),
        canActivate: [AuthGuard, PermissionsGuard],
    },
    {
        path: 'admin',
        loadChildren: () => import('./modules/administration/administration.module').then(m => m.AdministrationModule),
        canActivate: [AuthGuard, PermissionsGuard],
    },
    {
        path: 'logs',
        loadChildren: () => import('./modules/logs/logs.module').then(m => m.LogsModule),
        canActivate: [AuthGuard, PermissionsGuard],
    },
    {
        path: '**',
        component: NotFoundComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    providers: [
        DeactivateGuard,
    ],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})


export class AppRouting { }
