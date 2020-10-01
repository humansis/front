import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { PermissionsGuard } from '../../core/guards/permissions.guard';
import { DeactivateGuard } from '../../core/guards/deactivate.guard';
import { BeneficiariesImportComponent } from 'src/app/modules/beneficiaries/containers/beneficiaries-import/beneficiaries-import.component';
import { BeneficiariesComponent } from 'src/app/modules/beneficiaries/containers/beneficiaries/beneficiaries.component';
import { ImportedDataComponent } from 'src/app/modules/beneficiaries/containers/beneficiaries-import/imported-data/imported-data.component';
import { DataMappingComponent } from 'src/app/modules/beneficiaries/containers/data-mapping/data-mapping.component';
import { DataValidationComponent } from 'src/app/modules/beneficiaries/containers/data-validation/data-validation.component';
import { UpdateBeneficiaryComponent } from 'src/app/modules/beneficiaries/containers/update-beneficiary/update-beneficiary.component';
import { HouseholdDetailComponent } from 'src/app/modules/beneficiaries/containers/household-detail/household-detail.component';

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
  {
    path: 'household/:id',
    component: HouseholdDetailComponent,
    canDeactivate: [DeactivateGuard],
    canActivate: [AuthGuard, PermissionsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiariesRoutingModule {}
