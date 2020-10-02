import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorsListComponent } from 'src/app/modules/vendors/containers/vendors-list/vendors-list.component';

const routes: Routes = [
  {
    path: '',
    component: VendorsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsRoutingModule {}
