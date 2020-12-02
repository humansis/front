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
import { AssistanceInstitutionComponent } from './components/assistance-institution/assistance-institution.component';
import { AssistanceCommunityComponent } from './components/assistance-community/assistance-community.component';

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
