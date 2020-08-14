import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutGuard } from '../../core/guards/logout.guard';
import { SsoComponent } from './sso/sso.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LogoutGuard],
  },
  {
    path: 'sso',
    component: SsoComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
