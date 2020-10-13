import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { BeneficiariesImportComponent } from './beneficiaries-import/beneficiaries-import.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { PermissionsGuard } from '../../core/guards/permissions.guard';
import { ImportedDataComponent } from './beneficiaries-import/imported-data/imported-data.component';
import { DataValidationComponent } from './data-validation/data-validation.component';
import { DeactivateGuard } from '../../core/guards/deactivate.guard';
import { UpdateBeneficiaryComponent } from './update-beneficiary/update-beneficiary.component';
import { DataMappingComponent } from 'src/app/modules/beneficiaries/data-mapping/data-mapping.component';

const routes: Routes = [
  {
    path: '',
    component: BeneficiariesComponent,
    canActivate: [AuthGuard, PermissionsGuard],
  },
  {
    path: 'import',
    component: BeneficiariesImportComponent,
    canActivate: [AuthGuard, PermissionsGuard],
  },
  {
    path: 'imported',
    component: ImportedDataComponent,
    canActivate: [AuthGuard, PermissionsGuard],
  },
  {
    path: 'import/data-mapping',
    component: DataMappingComponent,
    canDeactivate: [DeactivateGuard],
    canActivate: [AuthGuard, PermissionsGuard],
  },
  {
    path: 'import/data-validation',
    component: DataValidationComponent,
    canDeactivate: [DeactivateGuard],
    canActivate: [AuthGuard, PermissionsGuard],
  },
  {
    path: 'add-beneficiaries',
    component: UpdateBeneficiaryComponent,
    canDeactivate: [DeactivateGuard],
    canActivate: [AuthGuard, PermissionsGuard],
  },
  {
    path: 'update-beneficiary/:id',
    component: UpdateBeneficiaryComponent,
    canDeactivate: [DeactivateGuard],
    canActivate: [AuthGuard, PermissionsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiariesRoutingModule {}
