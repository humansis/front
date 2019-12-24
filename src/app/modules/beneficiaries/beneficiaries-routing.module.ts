import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  },
  {
    path: 'import',
    component: BeneficiariesImportComponent,
  },
  {
    path: 'imported',
    component: ImportedDataComponent,
  },
  {
    path: 'import/data-mapping',
    component: DataMappingComponent,
    canDeactivate: [DeactivateGuard],
  },
  {
    path: 'import/data-validation',
    component: DataValidationComponent,
    canDeactivate: [DeactivateGuard],
  },
  {
    path: 'add-beneficiaries',
    component: UpdateBeneficiaryComponent,
    canDeactivate: [DeactivateGuard],
  },
  {
    path: 'update-beneficiary/:id',
    component: UpdateBeneficiaryComponent,
    canDeactivate: [DeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiariesRoutingModule {}
