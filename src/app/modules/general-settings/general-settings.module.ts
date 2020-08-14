import { NgModule } from '@angular/core';

import { GeneralSettingsRoutingModule } from './general-settings-routing.module';
import { DynamicSettingsComponent } from './containers/dynamic-settings/dynamic-settings.component';
import { GeneralSettingsComponent } from 'src/app/modules/general-settings/containers/general-settings/general-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { InstitutionsComponent } from './containers/institutions/institutions.component';
import { InstitutionFormComponent } from './components/institution-form/institution-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommunitiesComponent } from './containers/communities/communities.component';
import { CommunityTableComponent } from 'src/app/modules/general-settings/containers/communities/community-table/community-table.component';
import { CommunityModalComponent } from './containers/communities/community-modal/community-modal.component';
import { InstitutionTableComponent } from 'src/app/modules/general-settings/containers/institutions/institution-table/institution-table.component';
import { InstitutionModalComponent } from 'src/app/modules/general-settings/containers/institutions/institution-modal/institution-modal.component';
import { CommunityFormComponent } from './components/community-form/community-form.component';

@NgModule({
  declarations: [
    DynamicSettingsComponent,
    GeneralSettingsComponent,
    InstitutionsComponent,
    InstitutionTableComponent,
    InstitutionFormComponent,
    InstitutionModalComponent,
    CommunitiesComponent,
    CommunityTableComponent,
    CommunityModalComponent,
    CommunityFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    GeneralSettingsRoutingModule,
    NgSelectModule,
  ],
})
export class GeneralSettingsModule {}
