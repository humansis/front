import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AssistanceCreatePageComponent } from './containers/assistance-create-page/assistance-create-page.component';
import { AssistanceLocationFormComponent } from './components/assistance-location-form/assistance-location-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AssistanceParametersFormComponent } from './components/assistance-parameters-form/assistance-parameters-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AssistanceCriteriaComponent } from './containers/assistance-criteria/assistance-criteria.component';
import { AssistanceCriteriaGroupComponent } from './components/assistance-criteria-group/assistance-criteria-group.component';
import { AssistanceCommodityComponent } from './containers/assistance-commodity/assistance-commodity.component';
import { AssistanceCommodityGroupComponent } from './components/assistance-commodity-group/assistance-commodity-group.component';
import { TargetedBeneficiariesModalComponent } from './modals/targeted-beneficiaries-modal/targeted-beneficiaries-modal.component';
import { NotValidatedInstitutionDistributionComponent } from './containers/not-validated-institution-distribution/not-validated-institution-distribution.component';
import { DistributionsComponent } from './distributions/distributions.component';
import { MobileMoneyComponent } from './distributions/validated-components/mobile-money/mobile-money.component';
import { NotValidatedDistributionComponent } from './distributions/not-validated-distribution/not-validated-distribution.component';
import { QrVoucherComponent } from './distributions/validated-components/qr-voucher/qr-voucher.component';
import { GeneralReliefComponent } from './distributions/validated-components/general-relief/general-relief.component';
import { NotValidatedCommunityDistributionComponent } from './containers/not-validated-community-distribution/not-validated-community-distribution.component';
import { AssistanceInstitutionComponent } from './components/assistance-institution/assistance-institution.component';
import { AssistanceCommunityComponent } from './components/assistance-community/assistance-community.component';
import { ImportDistributionComponent } from './distributions/import-distribution/import-distribution.component';
import { AssitanceActivityDescriptionFormComponent } from './components/assitance-activity-description-form/assitance-activity-description-form.component';

@NgModule({
  declarations: [
    AssistanceCreatePageComponent,
    AssistanceLocationFormComponent,
    AssistanceParametersFormComponent,
    AssistanceCriteriaComponent,
    AssistanceCriteriaGroupComponent,
    AssistanceCommodityComponent,
    AssistanceCommodityGroupComponent,
    TargetedBeneficiariesModalComponent,
    AssistanceInstitutionComponent,
    AssistanceCommunityComponent,
    DistributionsComponent,
    MobileMoneyComponent,
    QrVoucherComponent,
    GeneralReliefComponent,
    ImportDistributionComponent,
    NotValidatedDistributionComponent,
    NotValidatedInstitutionDistributionComponent,
    NotValidatedCommunityDistributionComponent,
    AssitanceActivityDescriptionFormComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
})
export class ProjectsModule {}
